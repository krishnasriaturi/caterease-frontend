import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrganizerLogin() {
    const [credentials, setCredentials] = useState({ name: '', eventId: '', eventPassword: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!credentials.name || !credentials.eventId || !credentials.eventPassword) {
            setError('All fields are required.');
            return;
        }
        try {
            setError('');
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/organizer/submissions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Invalid event credentials');
            }

            const data = await response.json();
            navigate('/GuestSubmissions', { state: { guestData: data } });
        } catch (err) {
            setError('Login failed: ' + err.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Organizer Login
            </h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={credentials.name}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="eventId" className="block text-sm font-medium text-gray-700">Event ID</label>
                    <input
                        type="text"
                        id="eventId"
                        name="eventId"
                        value={credentials.eventId}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter event ID"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="eventPassword" className="block text-sm font-medium text-gray-700">Event Password</label>
                    <input
                        type="password"
                        id="eventPassword"
                        name="eventPassword"
                        value={credentials.eventPassword}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter event password"
                        required
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                    View Guest Preferences
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
}

export default OrganizerLogin;
