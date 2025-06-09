import React, { useEffect, useState } from 'react';
import Card from './Card';

const ServicesPage = () => {
    // Array of services
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/items`);
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, [])

    return (
        <div className="flex flex-wrap justify-center items-center gap-8 p-8">
            {services.map((service, index) => (
                <Card
                    id={service.id}
                    key={index}
                    image={`service${service.id}.jpg`}
                    title={service.name}
                    description={service.description}
                />
            ))}
        </div>
    );
};

export default ServicesPage;