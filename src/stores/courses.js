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
        location: '',
        initialized: false,
        test: "Courses store"
    }),
    actions: {
        setLocation(location) {
            this.location = location
        },
        getData() {
            courseService.getLocation(this.location)
                .then((response) => {
                    console.log(response)
                    this.setFilterCourses(response.data, this.location)
                })
                .catch((error) => {
                console.log(error)
                })
        },
        setFilterCourses(responseData) {
            const storeSettings = useSettingsStore()
            let timestampNow = Date.now()
            let day = null
            let month = null
            let year = null 
            let timestampCourse = null
            let courseTimeout = storeSettings.dataFromApi[this.location].courseTimeout 
            this.filteredCourses = []
            // Format date and time into ISO, then convert to timestamp and compare to current timestamp. Filters courses to display
            for (let i = 0; i < responseData.length; i++) {
              const element = responseData[i];
              day = element.Dato.substring(0,2)
              month = element.Dato.substring(3,5)
              year = element.Dato.substring(6)
              timestampCourse = Date.parse(year + '-' + month + '-' + day + ' ' + element.Starttid)
              if((timestampNow - timestampCourse) < courseTimeout) {
                this.filteredCourses.push(element)
              }
            }
            this.setPaginatedSlice()
        },
        setPaginatedSlice() {
            const storeSettings = useSettingsStore()
            var linesPerPage = 10 // storeSettings.dataFromApi[this.location].linesPerPage
            console.log(this.filteredCourses.length)
            if(this.filteredCourses.length > linesPerPage){
                this.end += Math.min((this.filteredCourses.length-this.start), linesPerPage)
                this.paginatedSlice = this.filteredCourses.slice(this.start, this.end)

                if(this.start < (this.end - (linesPerPage-1))){
                    this.start += 10
                } else {
                    this.start = 0
                    this.end = 0
                }
            } else {
                this.paginatedSlice = this.filteredCourses.slice()
            }
            console.log(this.paginatedSlice)
            
        },
        setInitialized(value) {
            this.initialized = value
        }
    }


})