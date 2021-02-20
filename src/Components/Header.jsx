import React from 'react';
import '../scss/Components/_header.scss'

export const Header = ({getTheme}) => {
    const setTheme = () => {
        return getTheme();
    }
    return (
        <div className="header">
        <div className="header__container">
        <h1>TODO</h1>
            <div className="theme-btn" onClick={setTheme}></div>
        </div>
           
        </div>
    )
}
