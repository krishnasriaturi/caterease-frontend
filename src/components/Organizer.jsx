import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrganizerLogin() {
    const [credentials, setCredentials] = useState({ name: '', eventId: '', eventPassword: '' });
    const [isCreateMode, setIsCreateMode] = useState(false); // Toggle between "View Submissions" and "Create Event"
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
            const endpoint = isCreateMode
                ? `${import.meta.env.VITE_BACKEND_URL}/organizer/create` // Endpoint for creating an event
                : `${import.meta.env.VITE_BACKEND_URL}/organizer/submissions`; // Endpoint for viewing submissions

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error(isCreateMode ? 'Failed to create event' : 'Failed to fetch submissions');
            }

            const data = await response.json();

            if (isCreateMode) {
                alert(`Event created successfully: ${data.eventName}`);
                setCredentials({ name: '', eventId: '', eventPassword: '' }); // Reset form
            } else {
                navigate('/guest-submissions', { state: { guestData: data } }); // Navigate to Guest Submissions page
            }
        } catch (err) {
            setError(isCreateMode ? 'Event creation failed: ' + err.message : 'Login failed: ' + err.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                {isCreateMode ? 'Create an Event' : 'Organizer Login'}
            </h2>
            <div className="space-y-4">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
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
                {/* Event ID Field */}
                <div>
                    <label htmlFor="eventId" className="block text-sm font-medium text-gray-700">
                        Event ID
                    </label>
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
                {/* Event Password Field */}
                <div>
                    <label htmlFor="eventPassword" className="block text-sm font-medium text-gray-700">
                        Event Password
                    </label>
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
                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                    {isCreateMode ? 'Submit Event' : 'View Submissions'}
                </button>
                {/* Error Message */}
                {error && <p className="text-red-500 mt-4">{error}</p>}

                {/* Toggle Mode */}
                <div className="text-center text-gray-500 my-4">or</div>
                <button
                    onClick={() => setIsCreateMode(!isCreateMode)}
                    className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
                >
                    {isCreateMode ? 'Switch to View Submissions' : 'Switch to Create an Event'}
                </button>
            </div>
        </div>
    );
}

export default OrganizerLogin;
