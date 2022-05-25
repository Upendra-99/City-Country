import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from 'styled-components';

const Form = styled.form`
width: 100%;
margin: 50px;
&>input{
    width: 30%;
    padding:10px;
    margin: 5px;
    border-radius:4px;
    text-align: center;
}`

export const Signup = () => {
    const [input, setInput] = useState({
        email: "hello",
        userName: "",
        password: ""
    })

    const navigate = useNavigate()


    const onChangeHandler = (e) => {

        let key = e.target.name;
        let value = e.target.value;

        setInput({
            ...input,
            [key]: value
        })
        // console.log(input)
    }

    function handleSingup(e) {
        e.preventDefault();

        fetch('http://localhost:3001/Users', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input),
        })
            .then(res => res.json())
            .then(res => {
                alert('successfully Registered')
                navigate('/login')
            })
            .catch((error) => console.error('Please Enter correct details'))

    }
    return <>

        <Form action="#" onSubmit={handleSingup} >
            <h3>Fill the Details to get Registered</h3>
            <input type="text" name="email" onChange={onChangeHandler} placeholder="Enter email" /> <br />
            <input type="text" name="userName" onChange={onChangeHandler} placeholder="username" /> <br />
            <input type="text" name="password" onChange={onChangeHandler} placeholder="password" /> <br />
            <input type={"submit"} id="submit" />
        </Form>

    </>
}