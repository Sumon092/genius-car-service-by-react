import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>This is service detail of {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;