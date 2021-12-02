import Country from "../components/Country";

const RegionList = ( {regions, getRegionCountries, selectedRegion, setSelectedRegion, regionCountries} ) => {

    const handleRegionClick = (e) => {

        getRegionCountries(e.target.textContent);
        const itemToShow = document.getElementById(e.target.textContent);
        makeAllSubsectionsHidden(itemToShow);
        makeSelectedSubsectionVisible(itemToShow);
    }

    const countryList = regionCountries.map((country, index) => {
        return (
            <Country country={country} key={index} />
        )
    })

    const generateRegionList = regions.map((region, index) => {
        return (
            <>
                <li className="region-card" key={index} onClick={handleRegionClick}>{region}</li>
                <ul id={region} className="hiding-cards" style={{display:"none"}}>
                    {countryList}
                </ul>
            </>
        )
    })

    const makeAllSubsectionsHidden = (itemToShow) => {
        const allItems = Array.from(document.getElementsByClassName("hiding-cards"))
        for (let i in allItems) {
            if (allItems[i] !== itemToShow)
            allItems[i].style.display = "none"
        }
    }

    const makeSelectedSubsectionVisible = (itemToShow) => {
        if (itemToShow.style.display === 'none') {
            itemToShow.style.display = 'flex';
        } else {
            itemToShow.style.display = 'none';
        }
    }

    return (
        <ul className="region-list">
            {generateRegionList}
        </ul>
    ) 
}

export default RegionList;