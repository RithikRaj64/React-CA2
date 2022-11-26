import React, { useState } from 'react';
import "../Styles/ColorChanger.css";
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function ColorChanger() {

    const [color, setColor] = useState("white");
    const handleColor = (event) => {
        setColor(event.target.value);
    }

    return (
        <Box className='box'
            backgroundColor={color}
            sx={{
                width: 350,
                height: 450,
                borderRadius: 35
            }}
        >
            <div className='conts'>
                <h3>The Displayed color is</h3>
                <h4>{color}</h4>
                <FormControl>
                    <InputLabel id='sel'>Color</InputLabel>
                    <Select id={color} onChange={handleColor} label="Select" labelId='sel' sx={{ width: 200 }}>
                        <MenuItem value={'lime'}>Lime</MenuItem>
                        <MenuItem value={'lavender'}>Lavender</MenuItem>
                        <MenuItem value={'crimson'}>Crimson</MenuItem>
                        <MenuItem value={'darkblue'}>Darkblue</MenuItem>
                        <MenuItem value={'teal'}>Teal</MenuItem>
                        <MenuItem value={'rebeccapurple'}>Rebecca Purple</MenuItem>
                        <MenuItem value={'ghostwhite'}>Ghost White</MenuItem>
                        <MenuItem value={'aquamarine'}>Aqua Marine</MenuItem>
                        <MenuItem value={'aliceblue'}>Alice Blue</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </Box>
    )
}

export default ColorChanger;