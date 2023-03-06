import Button from '@mui/material/Button'
import React from 'react'

import './Main.css'

const Main = (props) => { // define props as an argument

const title = props.title;
const text = props.text;


    return (
        <div className='main-container'>
            <h1>{title}</h1>
            <p>{text}</p>
            <Button variant="contained">Hello World</Button>
        </div>
    )
}

Main.defaultProps = {
    title: "Fallo",
    text: "Sorry por la inconveniencia"
}

export default Main;

