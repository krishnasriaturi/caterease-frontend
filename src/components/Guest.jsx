import React, { useState } from 'react';

export default function GuestForm() {
    const [form, setForm] = useState({
        eventId: '',
        password: '',
        guestName: '',
        preference: '',
        suggestedDishes: '',
        personalMessage: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { ...form, suggestedDishes: form.suggestedDishes.split(',').map((s) => s.trim()) };
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/guest/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to submit preferences');
            }

            setMessage('Submitted successfully');
        } catch (err) {
            setMessage('Error submitting preferences: ' + err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <input
                name="eventId"
                placeholder="Event ID"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
            />
            <input
                name="password"
                placeholder="Event Password"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
            />
            <input
                name="guestName"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
            />

            {/* Preference Radio Buttons */}
            <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Preference</p>
                <div className="flex space-x-6">
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            name="preference"
                            value="Pure veg"
                            onChange={handleChange}
                            className="form-radio w-6 h-6 text-blue-600 focus:ring-blue-500"
                            required
                        />
                        <span className="text-gray-700 text-lg">Pure Veg</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            name="preference"
                            value="Non veg"
                            onChange={handleChange}
                            className="form-radio w-6 h-6 text-blue-600 focus:ring-blue-500"
                            required
                        />
                        <span className="text-gray-700 text-lg">Non Veg</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            name="preference"
                            value="Vegan"
                            onChange={handleChange}
                            className="form-radio w-6 h-6 text-blue-600 focus:ring-blue-500"
                            required
                        />
                        <span className="text-gray-700 text-lg">Vegan</span>
                    </label>
                </div>
            </div>

            <input
                name="suggestedDishes"
                placeholder="Suggest Dishes (comma separated)"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
                name="personalMessage"
                placeholder="Any Allergies please specify"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
                Submit
            </button>
            {message && <p className="text-green-600 mt-4">{message}</p>}
        </form>
    );
}
