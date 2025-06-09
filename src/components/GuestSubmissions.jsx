import React from 'react';
import { useLocation } from 'react-router-dom';

const GuestSubmissions = () => {
    const location = useLocation();
    const guestData = location.state?.guestData || [];

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Guest Submissions</h2>
            {guestData.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {guestData.map((guest, i) => (
                        <li key={i} className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{guest.guestName}</h3>
                            <p className="text-lg text-gray-700 mb-2 text-left">
                                <strong className="font-bold text-black">Preference:</strong> {guest.preference}
                            </p>
                            <p className="text-lg text-gray-700 mb-2 text-left">
                                <strong className="font-bold text-black">Dishes:</strong> {guest.suggestedDishes.join(', ')}
                            </p>
                            <p className="text-lg text-gray-700 text-left">
                                <strong className="font-bold text-black">Message:</strong> {guest.personalMessage}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-lg text-gray-700 text-center">No guest submissions available.</p>
            )}
        </div>
    );
};

export default GuestSubmissions;