import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
const Services = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/services');
    };
    return (
        <div className="flex flex-wrap justify-center items-center gap-8 p-8">
            <Card
                id="1"
                image="cater3.jpg"
                title="Wedding Event"
                description="
We have the concept of inviting all our relatives, friends and known ones? Its because, when a family celebrates an event means, its an occasion, when lot of people celebrates an event means, it turns as a feast. If there any feast occurs without food?? We are here to make a memorable experience for your guests by pampering their taste buds."
                buttonText="Read more"
            />
            <Card
                id="2"
                image="cater5.jpg"
                title="Corporate Event"
                description="
From corporate events to business occasions or milestone celebrations, our event catering team captures the heart of their audiences on their special occasions. We focus on delivering the customized delicacies of different types. We make sure all the audience feel good about the food too and that make your event unique."
                buttonText="Read more"
            />
            <Card
                id="3"
                image="cater4.jpg"
                title="Birthday Party"
                description="
Make every birthday a memorable one with our birthday photography. Whether it’s a child's first birthday or a milestone celebration, we capture the joy, excitement, and love of the day and preserve it forever. At Venus Catering Service, we take care of the happiness of your guests by offering them amazing food on behalf of you."
                buttonText="Read More"
            />

            <div className="  my-2 mx-28 ">
                <button
                    onClick={handleNavigate}
                    className="bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
                >
                    View All Services
                </button>
            </div>
        </div>
    );
};

export default Services;