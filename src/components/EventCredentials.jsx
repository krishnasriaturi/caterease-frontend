import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EventCredentials = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const eventData = location.state;

    const [eventId, setEventId] = useState('');
    const [eventPassword, setEventPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!eventId || !eventPassword) {
            setError('Event ID and Password are required.');
            return;
        }

        try {
            const payload = {
                ...eventData,
                eventId,
                eventPassword
            };

            console.log("Sending payload to backend:", payload);

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/organizer/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const message = await response.text();
                throw new Error(message || 'Event creation failed. Please try another ID.');
            }

            setSuccess(true);
            setError('');
            // Optionally redirect to dashboard or reset
            setEventId('');
            setEventPassword('');
        } catch (err) {
            console.error("Backend error:", err);
            setError(err.message || 'Something went wrong');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Set Event Credentials</h2>

            <label className="block mb-2">Event ID</label>
            <input
                type="text"
                value={eventId}
                onChange={(e) => setEventId(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Choose a unique Event ID"
            />

            <label className="block mb-2">Event Password</label>
            <input
                type="password"
                value={eventPassword}
                onChange={(e) => setEventPassword(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Set a secure password"
            />

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-600 mb-4">✅ Event created successfully!</p>}

            <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Create Event
            </button>
        </div>
    );
};

export default EventCredentials;
