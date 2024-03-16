import { defineStore } from "pinia";
import courseService from '../services/CourseService'
import { useSettingsStore } from "./settings";

export const useCoursesStore = defineStore("courses", {
    state: () => ({
        courses: {},
        filteredCourses: [],
        paginatedSlice: [],
        start: 0,
        end: 0,
        currentPage: 0,
        totalPages: 1,
        linesPerPage: 10,
        paginationTime: 10000,
        dataRefreshInterval: 360000,
        courseTimeout: 3600000,
        location: '',
        initialized: false,
        showPages: false,
        test: "Courses store",
        mockData: [
            {
                "Dato": "14-03-2024",
                "Starttid": "08:00:00",
                "Lokale": "Lok. H8",
                "Kategori": "BAB-3A",
                "Kursusnavn": "Befordring af fysisk handicappede med liftbil"
            },
            {
                "Dato": "14-03-2024",
                "Starttid": "08:00:00",
                "Lokale": "Lok. H8",
                "Kategori": "BABB",
                "Kursusnavn": "BAB 1-2-3A Befordring Af Bevægelseshæmmede"
            },
            {
                "Dato": "14-03-2024",
                "Starttid": "08:00:00",
                "Lokale": "Lok. H10",
                "Kategori": "GT",
                "Kursusnavn": "Gaffeltruck Certifikatkursus B"
            },
            {
                "Dato": "14-03-2024",
                "Starttid": "08:00:00",
                "Lokale": "Lok. H3",
                "Kategori": "C",
                "Kursusnavn": "Godstransport med lastbil"
            },
            {
                "Dato": "14-03-2024",
                "Starttid": "08:00:00",
                "Lokale": "Lok. H3",
                "Kategori": "D/EP",
                "Kursusnavn": "Buskørekort"
            },
            {
                "Dato": "14-03-2024",
                "Starttid": "08:00:00",
                "Lokale": "Lok. H3",
                "Kategori": "TK",
                "Kursusnavn": "Kvalifikation til persontransport i mindre køretøj (48652) - Taxikort 10 dage"
            }
        ]
    }),
    actions: {
        setLocation(location) {
            this.location = location
        },
        getData() {
            courseService.getLocation(this.location)
            .then((response) => {
                this.currentPage = 1
                this.setupParams()
                // this.setFilterCourses(response.data, this.location)
                this.setFilteredCourses(this.mockData, this.location)
                this.setTotalPages()
                this.setPaginatedSlice()
                this.initialized = true
                })
                .catch((error) => {
                console.log(error)
                })
        },
        setupParams(){
            const storeSettings = useSettingsStore()
            this.linesPerPage = storeSettings.dataFromApi[this.location].linesPerPage
            this.paginationTime = storeSettings.dataFromApi[this.location].paginationInterval
            this.dataRefreshInterval = storeSettings.dataFromApi[this.location].dataRefreshInterval
            this.courseTimeout = storeSettings.dataFromApi[this.location].courseTimeout 
        },
        setFilteredCourses(responseData) {
            let timestampNow = Date.now()
            let day = null
            let month = null
            let year = null 
            let timestampCourse = null
            this.filteredCourses = []
            // Format date and time into ISO, then convert to timestamp and compare to current timestamp. Filters courses to display
            for (let i = 0; i < responseData.length; i++) {
              const element = responseData[i];
              day = element.Dato.substring(0,2)
              month = element.Dato.substring(3,5)
              year = element.Dato.substring(6)
              timestampCourse = Date.parse(year + '-' + month + '-' + day + ' ' + element.Starttid)
              if((timestampNow - timestampCourse) < this.courseTimeout) {
                this.filteredCourses.push(element)
              }
            }
        },
        setTotalPages(){
            if(this.filteredCourses.length > this.linesPerPage){
                this.totalPages = Math.ceil(this.filteredCourses.length/this.linesPerPage)
                this.showPages = true
            } else {
                this.showPages = false
            }
        },
        setPaginatedSlice() {
            if(this.filteredCourses.length > this.linesPerPage){
                if(this.start >= (this.filteredCourses.length-this.linesPerPage)){
                    this.paginatedSlice = this.filteredCourses.slice(this.end)
                    this.start = 0
                    this.end = 0
                } else {
                    this.end += Math.min((this.filteredCourses.length-this.start), this.linesPerPage)
                    this.paginatedSlice = this.filteredCourses.slice(this.start, this.end)
                    this.start += this.linesPerPage
                }
            } else {
                this.paginatedSlice = this.filteredCourses.slice()
            } 
        },
        turnPage(){
            this.setPaginatedSlice()
            if (this.currentPage >= this.totalPages) {
                this.currentPage = 1
            } else {
                this.currentPage++
            }
        },
        setInitialized(value) {
            this.initialized = value
        }
    }


})