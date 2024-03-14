import { defineStore } from "pinia";
import settingsService from '../services/SettingsService'

export const useSettingsStore = defineStore("settings", {
    state: () => ({
        courseTimeout: 960000,
        dataRefreshInterval: 80000,
        linesPerPage: 10,
        paginationInterval: 10000,
        locations: {
            HVIDOVRE: 'hvidovre',
            HOLBAEK: 'holbaek',
            KOEGE: 'koege',
            ROSKILDEADMIN: 'roskildeAdmin',
            ROSKILDEB: 'roskildeB'
        },
        dataFromApi: {
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
                paginationInterval: 100000
            },
            koege: {
                courseTimeout: 360000000,
                dataRefreshInterval: 360000,
                linesPerPage: 4,
                paginationInterval: 100000
            },
            roskildeAdmin: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 100000
            },
            roskildeB: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 100000
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
        getData() {
            settingsService.getParams()
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                console.log(error)
                })
        },
        setApiValues() {


        }

    },

})