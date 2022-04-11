import React from 'react';

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("demo").innerHTML = year;
    return (
        <div>
            <p id='demo'><small>All rights reserved &copy; </small></p>
        </div>
    );
};

export default Footer;