// client/src/services/EventsAPI.jsx

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust the base URL as needed

const getEventById = async (id) => {

    try {
        const response = await fetch(`${API_BASE_URL}/events/${id}`);
        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText} - ${errorDetails}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        throw error;
    }
};

export default { getEventById };