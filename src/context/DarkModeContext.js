    import React, { createContext, useState, useContext, useEffect } from 'react';

    const DarkModeContext = createContext();

    export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
        </DarkModeContext.Provider>
    );
    };

    export const useDarkMode = () => useContext(DarkModeContext);
