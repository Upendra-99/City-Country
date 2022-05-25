import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavBar } from "../Components/NavBar";
import { AddLoadingStatus } from "../Redux/action";

export const AddCountry = () => {
    const [input, setInput] = useState({
        country: "",
    })
    const inputRef = useRef()
    const dispatch = useDispatch();

    let onChangeHandle = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    let onSubmitHandle = (e) => {
        dispatch(AddLoadingStatus(true))
        e.preventDefault();
        setTimeout(() => {
            fetch(`http://localhost:3001/country?country=${input.country}`)
                .then((res) => res.json())
                .then((res) => {
                    if (res.length) {
                        alert("Country already exists")
                    } else if (input.country.trim().length === 0) {
                        alert("Enter a Country Name")
                    } else {
                        fetch(`http://localhost:3001/country`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(input)

                        })
                            .then((res) => res.json())
                            .then((res) => {
                                inputRef.current.value = "";
                                alert("Country added")
                            })
                            .catch((err) => console.log(err))


                    }
                })
                .catch((err) => console.error(err))
            dispatch(AddLoadingStatus(false))
        }, 1000);
    }

    return <>
        <NavBar />
        <h3> Add Country</h3>
        <form action="" onSubmit={onSubmitHandle}>
            <label htmlFor="for country"></label>
            <input type="text" name="country" ref={inputRef} onChange={onChangeHandle} />
            <input type="submit" value={"ADD"} />
        </form>
    </>
}