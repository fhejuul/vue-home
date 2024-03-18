import { defineStore } from "pinia";
import courseService from '../services/CourseService'
import { useSettingsStore } from "./settings";

export const useMarketingStore = defineStore("marketing", {
    state: () => ({
        inlineDisplayUrl: {
            allLocations: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            hvidovre: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            holbaek: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            koege: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            roskildeAdmin: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            roskildeB: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
        },
        fullPageUrl: {
            allLocations: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            hvidovre: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            holbaek: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            koege: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            roskildeAdmin: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
            roskildeB: 'https://github.com/fhejuul/json-img-test/raw/main/marketingKoege.gif',
        },
    }),
    actions: {
        
    }


})