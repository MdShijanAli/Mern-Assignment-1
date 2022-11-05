import { countryList } from "./Countries/countries.js";

countryList.map((country, i) => {
    let Countries = `I live in ${country.name}`
    console.log(Countries)
})