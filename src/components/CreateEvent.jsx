import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
    const [form, setForm] = useState({
        name: '',          // Organizer name
        eventName: '',     // Title of the event
        date: '',
        time: '',
        plates: ''
    });

    const [error, setError] = useState('');
    const [existingDates, setExistingDates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDates = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/organizer/dates`);
                const data = await res.json();
                setExistingDates(data); // Array of date strings like "2025-06-25"
            } catch (err) {
                console.error("Failed to fetch dates:", err);
            }
        };
        fetchDates();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!form.name || !form.eventName || !form.date || !form.time || !form.plates) {
            setError("All fields are required.");
            return false;
        }

        if (existingDates.includes(form.date)) {
            setError('Date is already occupied.');
            return false;
        }

        const [hour, minute] = form.time.split(":").map(Number);
        if (hour < 7 || hour > 21 || (hour === 21 && minute > 0)) {
            setError('Service not available in the required time (7 AM - 9 PM).');
            return false;
        }

        const plates = parseInt(form.plates, 10);
        if (plates < 10) {
            setError('Minimum number of plates is 10.');
            return false;
        }
        if (plates > 500) {
            setError('Maximum number of plates is 500.');
            return false;
        }

        setError('');
        return true;
    };

    const handleSubmit = () => {
        if (validate()) {
            navigate('/EventCredentials', {
                state: {
                    name: form.name,
                    eventName: form.eventName,
                    eventDate: form.date,
                    eventTime: form.time,
                    numberOfPlates: parseInt(form.plates, 10)
                }
            });
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Create Event</h2>

            <label className="block mb-2">Your Name (Organizer)</label>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter your name"
            />

            <label className="block mb-2">Event Title</label>
            <input
                type="text"
                name="eventName"
                value={form.eventName}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                placeholder="e.g., Wedding Lunch"
            />

            <label className="block mb-2">Event Date</label>
            <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2">Time for Food Delivery</label>
            <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2">Number of Plates</label>
            <input
                type="number"
                name="plates"
                value={form.plates}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
            />

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Proceed to Event Credentials
            </button>
        </div>
    );
};

export default CreateEvent;
