import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import '../css/Event.css';
import LocationsAPI from '../services/LocationsAPI';
import SearchEvents from "../components/SearchEvents.jsx";

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
        <div className="events-list">
          <SearchEvents events={events} />
        </div>
    </div>
  );
};

export default EventsPage;