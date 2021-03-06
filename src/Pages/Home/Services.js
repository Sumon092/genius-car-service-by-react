import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services/Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container' id='services'>
            <h1 className='service-title'>Our services</h1>

            <div className="service-container">
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}>
                        </Service>)
                }
            </div>
        </div>

    );
};

export default Services;