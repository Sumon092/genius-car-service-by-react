import React from 'react';

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();
    // document.getElementById("demo").innerHTML = year;
    return (
        <footer className='text-center mt-3 bg-primary text-white font-bold align-center' style={{ height: '50px' }}>
            <p id='demo'><small>All rights reserved &copy; idea {year} ltd</small></p>
        </footer>
    );
};

export default Footer;