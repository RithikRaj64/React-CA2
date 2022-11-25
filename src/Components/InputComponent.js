import React from "react";
import Input1 from "./Input";
import "../Styles/Input.css";
import Box from "@mui/material/Box";

function InputComponent(props) {
    const list = props.prop;

    const els = list.map(el => <Input1 prop={el} />);

    return (
        <Box className="box">
            <div className="box-contents">
                <ul>{els}</ul>
            </div>
        </Box >
    )
}

export default InputComponent;