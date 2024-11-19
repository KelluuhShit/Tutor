    import React from 'react';
    import { useDarkMode } from '../context/DarkModeContext';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faSun as solidSun } from '@fortawesome/free-solid-svg-icons';
    import { faSun as regularSun } from '@fortawesome/free-regular-svg-icons';

    const Navbar = () => {
        const { darkMode, toggleDarkMode } = useDarkMode();

        return (
            <nav
                className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 bg-[#FFF4B7] dark:bg-[#010940] text-[#003161] dark:text-white
                shadow-md ${darkMode ? 'shadow-[rgba(255,255,255,0.2)]' : 'shadow-[rgba(0,0,0,0.2)]'} 
                border-b-[1px] ${darkMode ? 'border-white' : 'border-[#003161]'} z-50`}
            >
                {/* Logo */}
                <div className="text-2xl font-bold">
                    Tutor+ {/* Add an image/logo here if needed */}
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="bg-[#006A67] text-white p-2 rounded-lg font-medium hover:bg-[#003161] transition"
                    >
                        <FontAwesomeIcon
                            icon={darkMode ? solidSun : regularSun}
                            className="text-xl"
                        />
                    </button>

                    {/* Download Button */}
                    <button className="bg-[#003161] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#006A67] transition">
                        Download App
                    </button>
                </div>
            </nav>
        );
    };

    export default Navbar;
