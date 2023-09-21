import React from 'react'
import classes from './display.module.css'

const Display = ({ value }) => {
    return (
        <>
            <span style={{ display: "block", color: "white", fontSize: "24px" }}>Calculator</span>
            <input type='text' value={value} readOnly className={classes.screen} />
        </>
    )
}

export default Display