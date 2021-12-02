import Country from "../components/Country";

const RegionList = ( {regions, getRegionCountries, selectedRegion, setSelectedRegion, regionCountries} ) => {

    const handleRegionClick = (e) => {
        getRegionCountries(e.target.textContent);
    }

    const generateRegionList = regions.map((region, index) => {
        return (
            <li className="region-card" onClick={handleRegionClick}>{region}</li>
        )
    })

    const countryList = regionCountries.map((country, index) => {
        return (
            <Country country={country} key={index} />
        )
    })

    return (
        <ul>
            {generateRegionList}
            {countryList}
        </ul>
    ) 
}

export default RegionList;