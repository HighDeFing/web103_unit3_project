import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Event from '../components/Event';
import '../css/LocationEvents.css';
import LocationsAPI from '../services/LocationsAPI';

const LocationEvents = () => {
    const { index } = useParams();
    const [location, setLocation] = useState({});
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationData = await LocationsAPI.getLocationById(index);
                setLocation(locationData[0]);
                console.log(locationData);

                const eventsData = await LocationsAPI.getEventsByLocationId(index);
                setEvents(eventsData);
                console.log(eventsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [index]);

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={`http://localhost:3000/data/img/${location.image}`} alt={location.name} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {events && events.length > 0 ? (
                    events.map(event => (
                        <Event
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            date={event.date}
                            image={event.image}
                            place={event.place}
                            description={event.description}
                          />
                    ))
                ) : (
                    <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                )}
            </main>
        </div>
    );
};

export default LocationEvents;