import { defineStore } from "pinia";
import courseService from '../services/CourseService'
import { useSettingsStore } from "./settings";

export const useMarketingStore = defineStore("marketing", {
    state: () => ({
        inlineDisplayUrl: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
        fullPageUrl: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
    }),
    actions: {
        
    }


})