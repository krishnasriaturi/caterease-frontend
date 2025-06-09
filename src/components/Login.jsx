import React, { useState } from 'react';
import OrganizerLogin from './Organizer';
import GuestForm from './Guest';

const Login = () => {
    const [isOrganizer, setIsOrganizer] = useState(true); // Default to Organizer form

    return (
        <div className="p-8 max-w-lg mx-auto">
            {/* Toggle Buttons */}
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setIsOrganizer(true)}
                    className={`px-4 py-2 rounded-l-lg ${isOrganizer ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                >
                    Organizer
                </button>
                <button
                    onClick={() => setIsOrganizer(false)}
                    className={`px-4 py-2 rounded-r-lg ${!isOrganizer ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                >
                    Guest
                </button>
            </div>

            {/* Organizer Form */}
            {isOrganizer && (
                <OrganizerLogin />
            )}

            {/* Guest Form */}
            {!isOrganizer && (
                <GuestForm />
            )}
        </div>
    );
};

export default Login;