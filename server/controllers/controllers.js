import { pool } from '../config/database.js';

const getMusicEvents = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM music_events');
        res.status(200).json(rows);
    } catch (err) {
        res.status(409).send('Internal Server Error')
    }
}

const getMusicEventById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { rows } = await pool.query('SELECT * FROM music_events WHERE id = $1', [id]);
        res.status(200).json(rows);
    } catch (err) {
        res.status(409).send('Internal Server Error')
    }
}

const getMusicEventsByLocationId = async (req, res) => {
    try {
        const locationId = parseInt(req.params.locationId);
        const { rows } = await pool.query('SELECT * FROM music_events WHERE location_id = $1', [locationId]);
        res.status(200).json(rows);
    } catch (err) {
        res.status(409).send('Internal Server Error')
    }
}

const getLocations = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM locations');
        res.status(200).json(rows);
    } catch (err) {
        res.status(409).send('Internal Server Error')
    }
}

const getLocationById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { rows } = await pool.query('SELECT * FROM locations WHERE id = $1', [id]);
        res.status(200).json(rows);
    } catch (err) {
        res.status(409).send('Internal Server Error')
    }
}

const getMusicEventsAndLocations = async (req, res) => {
    try {
        const musicEventsQuery = pool.query('SELECT * FROM music_events');
        const locationsQuery = pool.query('SELECT * FROM locations');

        const [musicEventsResult, locationsResult] = await Promise.all([musicEventsQuery, locationsQuery]);

        res.status(200).json({
            musicEvents: musicEventsResult.rows,
            locations: locationsResult.rows
        });
    } catch (err) {
        res.status(509).send('Internal Server Error');
    }
};

export default { getMusicEvents, getMusicEventById, getLocations, getLocationById, getMusicEventsAndLocations, getMusicEventsByLocationId };