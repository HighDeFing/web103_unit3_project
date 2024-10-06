import React, { useState, useEffect } from 'react';
import '../css/Event.css';

const Event = ({ id, name, date, image, place, description }) => {
    const eventDate = new Date(date);
    const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setDaysLeft(calculateDaysLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateDaysLeft() {
        const now = new Date();
        const difference = eventDate - now;

        if (difference > 0) {
            return Math.floor(difference / (1000 * 60 * 60 * 24));
        } else {
            return 0;
        }
    }

    const day = eventDate.getDate();
    const month = eventDate.getMonth() + 1; // Months are zero-based
    const year = eventDate.getFullYear();

    return (
        <article className='event-information'>
            <img src={`http://localhost:3000/data/img/${image}`} alt={name} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{name}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {`${day}/${month}/${year}`}</p>
                    <p>{place}</p>
                    {daysLeft > 0 ? (
                        <p>Time left: {daysLeft} {daysLeft === 1 ? 'day' : 'days'}</p>
                    ) : (
                        <p>Event has started or passed</p>
                    )}
                </div>
            </div>
        </article>
    );
};

export default Event;