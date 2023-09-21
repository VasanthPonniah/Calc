import React from 'react'
import classes from './button.module.css'

const Button = ({ value, handleClick, style }) => {
    return (
        <button className={classes.button} value={value} onClick={handleClick} style={style}>{value}</button>
    )
}

export default Button