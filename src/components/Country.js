const Country = ({country}) => {
    if (!country) return
    return (
        <li>{country.name.official}</li>
    )
}

export default Country