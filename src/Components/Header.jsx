import React from 'react';
import '../scss/Components/_header.scss'

export const Header = ({getTheme}) => {
    const setTheme = () => {
        return getTheme();
    }
    return (
        <div className="header">
            <h1>TODO</h1>
            <div className="theme-btn" onClick={setTheme}></div>
        </div>
    )
}
