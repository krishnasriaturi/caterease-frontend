import React, { useState } from 'react';
import OrganizerLoginForm from './OrganizerDashboard';
import GuestLoginForm from './GuestLoginForm';

export default function Login() {
    const [role, setRole] = useState('organizer'); // 'organizer' or 'guest'

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => setRole('organizer')}
                        className={`px-4 py-2 font-semibold rounded-l ${
                            role === 'organizer' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                        }`}
                    >
                        Organizer Login
                    </button>
                    <button
                        onClick={() => setRole('guest')}
                        className={`px-4 py-2 font-semibold rounded-r ${
                            role === 'guest' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                        }`}
                    >
                        Guest Login
                    </button>
                </div>

                {role === 'organizer' ? <OrganizerLoginForm /> : <GuestLoginForm />}
            </div>
        </div>
    );
}
