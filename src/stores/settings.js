import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
    state: () => ({
        courseTimeout: 'This makes no sense',
        dataRefreshInterval: 80000,
        linesPerPage: 10,
        paginationInterval: 10000,
    }),
    actions: {
        
    }

    // const courseTimeout = ref()
    // const dataRefreshInterval = ref()
    // const linesPerPage = ref()
    // const paginationInterval = ref()


})