import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ link, styles, content }) => {
    return (
        <>
            <NavLink to={link} className={`block xxl:py-18 py-14 px-20 xxl:rounded-10 rounded-8 xxl:text-18 text-14 font-medium ${styles}`}>{content}</NavLink>
        </>
    )
}

export default Button