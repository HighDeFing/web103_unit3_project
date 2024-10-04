import { pool } from './database.js';
import './dotenv.js';
import musiceventsData from '../data/music_events.js';
import locationsData from '../data/locations.js'

const createMusicEventsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS music_events CASCADE;

    CREATE TABLE IF NOT EXISTS music_events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        description TEXT NOT NULL,
        place VARCHAR(255) NOT NULL,
        venue VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        location_id INT,
        CONSTRAINT fk_location
        FOREIGN KEY (location_id) REFERENCES locations(id)
    )`;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 music_events table created successfully');
    } catch (err) {
        console.error('Error creating music_events table', err);
    }
};

const createLocationsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS locations CASCADE;

    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        number_of_seats INT NOT NULL
    )`;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 locations table created successfully');
    } catch (err) {
        console.error('Error creating locations table', err);
    }
};

const seedMusicEventsTable = async () => {
    await seedLocationsTable();
    await createMusicEventsTable();

    musiceventsData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO music_events (id, name, date, description, place, venue, image, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            values: [
                event.id,
                event.name,
                event.date,
                event.description,
                event.place,
                event.venue,
                event.image,
                event.location_id
            ]
        };

        pool.query(insertQuery, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err);
                return;
            }

            console.log(`✅ ${event.name} added successfully`);
        });
    });
};

const seedLocationsTable = async () => {
    await createLocationsTable();

    locationsData.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO locations (id, name, description, number_of_seats) VALUES ($1, $2, $3, $4)',
            values: [
                location.id,
                location.name,
                location.description,
                location.numberOfSeats
            ]
        };

        pool.query(insertQuery, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err);
                return;
            }

            console.log(`✅ ${location.name} added successfully`);
        });
    });
};

seedMusicEventsTable();