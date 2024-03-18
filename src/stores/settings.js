import { defineStore } from "pinia";
import settingsService from '../services/SettingsService'

export const useSettingsStore = defineStore("settings", {
    state: () => ({
        marketingToggle: true,
        lokationer: {
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
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
            hvidovre: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
            holbaek: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
            koege: {
                courseTimeout: 36000000000,
                dataRefreshInterval: 360000,
                linesPerPage: 4,
                paginationInterval: 10000,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
            roskildeAdmin: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
            roskildeB: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
        },
        defaultValues: {
            hvidovre: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
            holbaek: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
            koege: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 100,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
            roskildeAdmin: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
            },
            roskildeB: {
                courseTimeout: 3600000,
                dataRefreshInterval: 360000,
                linesPerPage: 10,
                paginationInterval: 10000,
                showInlineMarketing: true,
                fullMarketingDisplay: {
                    show: true,
                    duration: 10000,
                    interval: 36000,
                },
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