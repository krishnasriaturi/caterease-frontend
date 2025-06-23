import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewPreferences = () => {
    const [name, setName] = useState('');
    const [eventId, setEventId] = useState('');
    const [eventPassword, setEventPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setName('');
        setEventId('');
        setEventPassword('');
        setError('');
    }, []);

    const handleSubmit = async () => {
        if (!name || !eventId || !eventPassword) {
            setError('Please enter name, Event ID and Password.');
            return;
        }

        try {
            setError('');
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/organizer/submissions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, eventId, eventPassword })
            });

            if (!response.ok) {
                throw new Error('Invalid credentials.');
            }

            const data = await response.json();
            navigate('/GuestSubmissions', { state: { guestData: data } });
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">View Guest Preferences</h2>

            <label className="block mb-2">Organizer Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter Your Name"
                autoComplete="off"
            />

            <label className="block mb-2">Event ID</label>
            <input
                type="text"
                value={eventId}
                onChange={(e) => setEventId(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter Event ID"
                autoComplete="off"
            />

            <label className="block mb-2">Event Password</label>
            <input
                type="password"
                value={eventPassword}
                onChange={(e) => setEventPassword(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter Event Password"
                autoComplete="new-password"
            />

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
                onClick={handleSubmit}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
                View Submissions
            </button>
        </div>
    );
};

export default ViewPreferences;
