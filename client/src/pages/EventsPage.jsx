import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import '../css/Event.css';
import LocationsAPI from '../services/LocationsAPI';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await LocationsAPI.getAllEvents();
        console.log(data);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-page">
      <h1>All Events</h1>
      {error ? (
        <h2>Error fetching events: {error.message}</h2>
      ) : (
        <div className="events-list">
          {events.length > 0 ? (
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
            <h2>No events available</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default EventsPage;