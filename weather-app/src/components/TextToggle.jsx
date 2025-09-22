import React, { useState } from 'react'

const TextToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleChange = () => {
        setDarkMode((prev) => !prev)
    }
    return (
        <div style={{
            backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh'
        }}>
            <button onClick={handleChange}>{darkMode ? "Switch To LightMode" : "Switch To DarkMode"}</button>
            <h1>{darkMode ? "Darkmode On" : "Lightmode On"}</h1>
        </div>
    )
}

export default TextToggle;
