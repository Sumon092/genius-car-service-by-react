import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()
    const NavigateToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    const { id, name, price, description, img } = service;
    return (
        <div className='service-detail'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>$ <small>{price}</small></p>
            <p>{description}</p>
            <button onClick={() => NavigateToServiceDetail(id)} className='btn btn-primary'>BOOK : {name}</button>
        </div>
    );
};

export default Service;