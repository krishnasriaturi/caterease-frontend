import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchService = async () => {
            try {
                const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/items/${id}`;
                const response = await fetch(backendUrl);
                const data = await response.json();
                setService(data);
            } catch (error) {
                console.error("Error fetching service details:", error);
            }
        };

        fetchService();
    }, [id]);

    if (!service) {
        return <div className="p-8 text-center text-lg font-semibold">Loading...</div>;
    }

    if (!service.dishes || service.dishes.length === 0) {
        return <div className="p-8 text-center text-lg font-semibold">No dishes available for this service.</div>;
    }

    return (
        <div className="p-8 bg-transparent">
            {/* Service Title */}
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">{service.name}</h1>
            <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">{service.description}</p>

            {/* Dishes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.dishes.map((dish, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Dish Image (Placeholder) */}
                        <div className="h-40 flex items-center justify-center text-black text-lg font-bold bg-gray-100">
                            🍽️
                        </div>

                        {/* Dish Details */}
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Get Bill Button */}
            <div className="mt-8 text-center">
                <button
                    onClick={() => navigate(`/bill/${id}`)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                    Get Bill
                </button>
            </div>
        </div>
    );
};

export default ServiceDetails;
