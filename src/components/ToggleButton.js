import React, { useState } from 'react';
 
function ToggleButton() {
    const [isDarkMode, setIsDarkMode] = useState(true);
 
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.style.backgroundColor = isDarkMode === true ? "#11192e" : "white";
        document.body.style.color = isDarkMode === true ? "white" : "#11192e";
    };
 
    return (
        <>
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={toggleDarkMode}
            />
            <label className="form-check-label"
                style={{ color: { isDarkMode } ? "black" : "white" }}>
                Dark Mode</label >
        </>
    );
}
 
export default ToggleButton;