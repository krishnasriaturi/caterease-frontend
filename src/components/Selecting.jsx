import React from "react";
import { useNavigate } from "react-router-dom";

export default function Selecting() {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            navigate(`/service/${selectedValue}`); // Navigate to the dynamic endpoint
        }
    };

    return (
        <select
            onChange={handleSelectChange}
            defaultValue=""
            className="w-[130px] text-gray-950 border border-gray-300 rounded-md p-2"
        >
            <option value="" disabled >
                Menu
            </option>
            <option value="1">Wedding Event</option>
            <option value="2">Wedding Anniversary</option>
            <option value="3">Birthday Party</option>
            <option value="4">Engagement</option>
            <option value="5">Seemantham</option>
            <option value="6">Annaprasana</option>
            <option value="7">House Warming</option>
            <option value="8">Corporate Events</option>
            <option value="9">Mehandi Function</option>
            <option value="10">Retirement Function</option>
            <option value="11">Reception Event</option>
            <option value="12">Haldi Function</option>
        </select>
    );
}
