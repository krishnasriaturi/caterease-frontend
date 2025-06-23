// OrganizerDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrganizerDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Organizer Dashboard</h2>
            <div className="flex flex-col gap-4">
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    onClick={() => navigate('/CreateEvent')}
                >
                    Create Event
                </button>
                <button
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                    onClick={() => navigate('/ViewPreferences')}
                >
                    View Guest Preferences
                </button>
            </div>
        </div>
    );
};

export default OrganizerDashboard;