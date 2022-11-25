import React, { useEffect, useState } from "react";
import { Box, FormControl, FormHelperText, Input, InputLabel } from "@mui/material"
import "../Styles/Input.css"

function Input1(props) {

    const [n, setn] = useState("c0");
    const [tn, settn] = useState("tc0");
    const [text, setText] = useState("");

    useEffect(() => {
        if (props.prop.type === "text") {
            setText("Please fill the column");
        }
        if (props.prop.type === "email") {
            setText("Invalid email");
        }
        if (props.prop.type === "password") {
            setText("Please fill the password");
        }
    }, [])

    const handleChange = (event) => {
        const type = props.prop.type;
        if (type === "text") {
            if (event.target.value.length > 0) {
                setn("c4");
                setText("");
            }
            else {
                setn("c0");
                setText("Please fill the column");
            }
        }

        if (type === "email") {
            let patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (event.target.value.match(patt)) {
                setn("c4");
                setText("");
            }
            else {
                setn("c0");
                setText("Invalid email");
            }
        }

        if (type === "password") {
            let strength = 0;
            let pw = event.target.value;

            if (pw.match(/(?=.*[a-z])/)) {
                strength++;
            }
            if (pw.match(/(?=.*[A-Z])/)) {
                strength++;
            }
            if (pw.match(/(?=.*[0-9])/)) {
                strength++;
            }
            if (pw.match(/(?=.*[!@#\$%\^&\*])/)) {
                strength++;
            }

            if (strength == 0) {
                setn("c0");
                setText("Very Weak");
            }
            else if (strength === 1) {
                setn("c1");
                setText("Weak");
                settn("tc2");
            }
            else if (strength === 2) {
                setn("c2");
                setText("Good");
                settn("tc2");
            }
            else if (strength === 3) {
                setn("c3");
                setText("Strong");
                settn("tc3");
            }
            else if (strength === 4 && pw.length >= 8) {
                setn("c4");
                setText("Very Strong");
                settn("tc4");
            }
        }
    }

    return (
        <>
            <label htmlFor={props.prop.datatestid}>{props.prop.label}</label>
            <br />
            <input className={n} id={props.prop.datatestid} type={props.prop.type} placeholder={props.prop.placeholder} onChange={handleChange} />
            <div className={tn}>
                {text}
            </div>
            <br />


            {/* <FormControl>
                <InputLabel className="label" htmlFor={props.prop.datatestid}>{props.prop.label}</InputLabel>
                <Input
                    type={props.prop.type}
                    placeholder={props.prop.placeholder}
                />
            </FormControl>
            <br /><br /> */}
        </>


    )
}

export default Input1;
