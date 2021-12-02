import { useState, useEffect } from 'react';
import SearchBar from "../components/SearchBar";
import RegionList from "./RegionList";

const AppContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("");
    const [regionCountries, setRegionCountries] = useState([]);
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    const getRegionCountries = (region) => {
        fetch('https://restcountries.com/v3.1/region/' + region)
        .then(response => response.json())
        .then(regionCountries => setRegionCountries(regionCountries))
    }

    const totalPopulation = () => {
        let total = 0
        for (let i in countries){
            total += countries[i].population
        }
        return total
    }

    // const totalPopulation = 


    return (
        <>
            <SearchBar />
            <RegionList regions={regions} getRegionCountries={getRegionCountries} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} regionCountries={regionCountries}/>
            <p>total pop : {totalPopulation()}</p>
            <p>button</p>
        </>
    )
}

export default AppContainer;