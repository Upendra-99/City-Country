import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    let onChangeHandler = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        setInput({
            ...input,
            [key]: value,
        })
    }

    let onSubmitHandler = (e) => {
        e.preventDefault()
        if (input.email.trim() === "" || input.password.trim() === "") {
            console.log("please enter credential")
        } else {
            fetch(`http://localhost:3001/Users?email=${input.email}`)
                .then((res) => res.json())
                .then((res) => {

                    if (res[0].password === input.password) {
                        alert(input.email + " is Logged In.")
                        navigate('/')
                    } else {
                        setInput({
                            ...input,
                            email: "",
                            password: ""
                        })
                        console.error("Password is incorrect, try again.");
                    }

                })
                .catch((error) => {
                    alert(input.email + " is invalid. Please register first.");
                    navigate('/signup')
                })
        }

    }


    return <>
        <h3>:: Enter Login Credentioals ::</h3>
        <form action="" onSubmit={onSubmitHandler}>
            <label htmlFor="for email"> Email</label> : &nbsp;
            <input type="text" name="email" onChange={onChangeHandler} placeholder="Enter Email" /> <br />
            <label htmlFor="for password"> Password</label> :&nbsp;
            <input type="text" name="password" onChange={onChangeHandler} placeholder="Enter Password" /> <br />
            <input type="submit" value={"Login"} />
        </form>

    </>
}