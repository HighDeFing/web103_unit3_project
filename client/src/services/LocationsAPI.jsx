// client/src/services/LocationsAPI.jsx

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust the base URL as needed

const getAllEvents = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/events`);
        console.log(response)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

const getEventById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/events/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        throw error;
    }
};

const getAllLocations = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/locations`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
};

const getLocationById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/locations/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching location with id ${id}:`, error);
        throw error;
    }
};

const getEventsByLocationId = async (locationId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/events/locations/${locationId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching events for location with id ${locationId}:`, error);
        throw error;
    }
}

export default { getAllEvents, getEventById, getAllLocations, getLocationById, getEventsByLocationId };