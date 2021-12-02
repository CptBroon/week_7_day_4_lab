const Country = ({country}) => {
    if (!country) return
    return (
        <li className="country-item">
            {country.name.official}
        </li>
    )
}

export default Country