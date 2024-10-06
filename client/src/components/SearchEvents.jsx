import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import '../css/Event.css';
import LocationsAPI from '../services/LocationsAPI';

const SearchEvents = ({ events }) => {
  const [locations, setLocations] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationsData = await LocationsAPI.getAllLocations();
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    if (selectedLocationId) {
        //Filter events by location
      const results = events.filter(event => event.location_id === parseInt(selectedLocationId));
      setFilteredEvents(results);
    } else {
      setFilteredEvents(events);
    }
  }, [selectedLocationId, events]);

  return (
    <div className="search-events">
      <h4>Search Events by Location</h4>
      <select
        value={selectedLocationId}
        onChange={e => setSelectedLocationId(e.target.value)}
      >
        <option value="">All Locations</option>
        {locations.map(location => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>
      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
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
          <h2>No events found</h2>
        )}
      </div>
    </div>
  );
};

export default SearchEvents;