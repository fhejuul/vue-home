import { defineStore } from "pinia";
import settingsService from '../services/SettingsService'

export const useSettingsStore = defineStore("settings", {
    state: () => ({
        marketingToggle: true,
        locations: {
            HVIDOVRE: 'hvidovre',
            HOLBAEK: 'holbaek',
            KOEGE: 'koege',
            ROSKILDEADMIN: 'roskildeAdmin',
            ROSKILDEB: 'roskildeB'
        },
        dataFromApi: {
            global: {
                useGlobal: true,
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000,
                showMarketing: true,
                link: 'https://raw.githubusercontent.com/fhejuul/json-img-test/main/marketingKoege.gif',
                showDuration: 0,
                supress: [{}],
                showDates: {}
            },
            hvidovre: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000
            },
            holbaek: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000
            },
            koege: {
                courseTimeout: 360000000,
                dataRefreshInterval: 360000,
                linesPerPage: 4,
                paginationInterval: 10000
            },
            roskildeAdmin: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000
            },
            roskildeB: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000
            },
        },
        defaultValues: {
            hvidovre: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000
            },
            holbaek: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000
            },
            koege: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 100
            },
            roskildeAdmin: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000
            },
            roskildeB: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000
            },
        },
        
    }),
    actions: {
        // Todo: Implement when backend service is ready
        // getData() {
        //     settingsService.getParams()
        //         .then((response) => {

        //         })
        //         .catch((error) => {
        //         console.log(error)
        //         })
        // },
        // setApiValues() {


        // }

    },

})