import React from 'react';
import '../css/Event.css';

const Event = ({ id, name, date, image, place, description }) => {
    const eventDate = new Date(date);
    const day = eventDate.getDate();
    const month = eventDate.getMonth() + 1; // Months are zero-based
    const year = eventDate.getFullYear();

    return (
        <article className='event-information'>
            <img src={`http://localhost:3000/data/${image}`} alt={name} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{name}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {`${day}/${month}/${year}`}</p>
                    <p>{place}</p>
                </div>
            </div>
        </article>
    );
};

export default Event;