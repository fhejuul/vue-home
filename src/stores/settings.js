import { defineStore } from "pinia";
import settingsService from '../services/settingsService'

export const useSettingsStore = defineStore("settings", {
    state: () => ({
        courseTimeout: 960000,
        dataRefreshInterval: 80000,
        linesPerPage: 10,
        paginationInterval: 10000,
        testObj: {
            koege: {
                testElement: 69,
            },
            roskilde: {
                testElement: 99,
            }
        },
        dataFromApi: {
            hvidovre: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 10
            },
            holbaek: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 100
            },
            koege: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 100
            },
            roskildeAdmin: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 100
            },
            roskildeB: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 100
            },
        },
        defaultValues: {
            hvidovre: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 10
            },
            holbaek: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 100
            },
            koege: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 100
            },
            roskildeAdmin: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 100
            },
            roskildeB: {
                courseTimeout: 3600,
                dataRefreshInterval: 360,
                linesPerPage: 10,
                paginationInterval: 100
            },
        },
        
    }),
    actions: {
        getData() {
            settingsService.getParams()
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                console.log(error)
                })
        },
        setDefaultValues() {

        }

    }


})