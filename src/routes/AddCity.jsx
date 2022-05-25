import React, { useState, useRef, useEffect } from "react";
import { NavBar } from "../Components/NavBar";


export const AddCity = () => {
    const [input, setInput] = useState({
        city: "",
        population: "",
        country_id: "",
    })
    const [getCountry, setGetCountry] = useState([])
    const inputRef = useRef([])

    let onChangeHandle = (e) => {
        console.log(e.target.name, e.target.value)
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
        })
    }

    let onSubmitHandle = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/cities?city=${input.city}&&country_id=${input.country_id}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.length) {
                    alert("City already exists")
                } else if (input.city.trim().length === 0 || input.country_id.trim().length === 0) {
                    alert("Enter a Country Name")
                } else {
                    fetch(`http://localhost:3001/cities`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(input)
                    })
                        .then((res) => res.json())
                        .then(() => {
                            // inputRef.current.value = ""
                            alert("City added")
                            setInput({
                                city: "",
                                population: "",
                                country_id: "",
                            })
                            setGetCountry([{}]);
                        })
                        .catch((err) => console.log('error while post method', err))

                }
            })
            .catch((err) => console.error('error while fetch method', err))

    }

    //Fetched data on loading form dropdown in form;
    useEffect(() => {
        fetch(`http://localhost:3001/country`)
            .then(response => {
                return response.json();
            })
            .then((data) => setGetCountry(data))
            .catch(error => console.log(error));
    }, [input])

    const { city, population } = input;

    return <>
        <NavBar />
        <h3> Add City</h3>
        <form action="" onSubmit={onSubmitHandle}>
            <label htmlFor="for city"></label>
            <input type="text" name="city" ref={inputRef} value={city} onChange={onChangeHandle} placeholder={"Enter city name"} required />
            <label htmlFor="for population"></label>
            <input type="number" name="population" ref={inputRef} value={population} onChange={onChangeHandle} placeholder={"Enter population of city"} required />
            <label htmlFor="for country"></label>
            <select type="text" name="country_id" onChange={onChangeHandle} required >
                <option value="" >Select Country</option>
                {
                    getCountry.map((obj) => {
                        return <option value={obj.id} key={obj.id} >
                            {obj.country}
                        </option>
                    })
                }
            </select>
            <input type="submit" value={"ADD"} />
        </form>
    </>
}