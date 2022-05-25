import React, { useState, useEffect } from 'react'
import style from "./getAllDetail.module.css"
import { v4 as uuidv4 } from "uuid"


const GetAllDetails = () => {
    const [cities, setCities] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(() => {
        //fetched Country
        fetch("http://localhost:3001/country")
            .then((countryRes) => countryRes.json())
            .then((countryRes) => setCountries(countryRes))

        //fetched cities
        fetch("http://localhost:3001/cities")
            .then((res) => res.json())
            .then((res) => {
                setCities(res)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <h3>list of All Cities</h3>
            <table className={style.table}>
                <tbody >
                    <tr className={style.tr}>
                        <th className={style.td}>City</th>
                        <th className={style.td}>Country</th>
                        <th className={style.td}>Population</th>
                    </tr>
                    {
                        // console.log(countries.includes({ id: 2, country: 'USA' }))
                        // console.log(countries.includes(countries))
                    }
                    {
                        cities.map((cityObj) => {
                            return <tr className={style.tr} key={uuidv4()}>
                                <td className={style.td} >{cityObj.city}</td>
                                <td className={style.td} >
                                    {
                                        countries.map((countryObj) => {
                                            if (cityObj.country_id == countryObj.id) {
                                                return countryObj['country']
                                                // console.log(cityObj.country_id, countryObj.id)
                                            }
                                            return ''
                                        })
                                    }
                                </td>
                                <td className={style.td} >{cityObj.population}</td>
                            </tr>

                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default GetAllDetails