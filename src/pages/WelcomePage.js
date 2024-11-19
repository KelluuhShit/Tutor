    import React, { useState, useEffect } from 'react';

    const WelcomePage = () => {
    const images = [
        'https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];

    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImage(prevImage => {
            const currentIndex = images.indexOf(prevImage);
            const nextIndex = (currentIndex + 1) % images.length;
            return images[nextIndex];
        });
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#FFF4B7] dark:bg-[#010940] text-[#003161] dark:text-white">
        {/* Background Images with reduced opacity and smooth transition */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 transition-opacity duration-2000 ease-in-out"
            style={{ backgroundImage: `url(${currentImage})` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl font-bold mb-4">Welcome to Tutor+</h1>
            <p className="text-lg mb-6 text-[#006A67] dark:text-[#FFF4B7]">
            Your trusted platform for getting your assignments done on time.
            </p>
            <div className="space-x-4">
            <button className="bg-[#006A67] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-[#003161] transition">
                Get Started
            </button>
            <button className="bg-transparent border border-[#003161] text-[#003161] dark:border-white dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-[#003161] hover:text-white transition">
                Learn More
            </button>
            </div>
        </div>
        </div>
    );
    };

    export default WelcomePage;
