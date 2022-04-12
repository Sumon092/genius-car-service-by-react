import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='service-detail'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>$ <small>{price}</small></p>
            <p>{description}</p>
            <button>Book {name}</button>
        </div>
    );
};

export default Service;