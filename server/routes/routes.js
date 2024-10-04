import express from 'express'
// import controllers for events and locations
import EventsController from '../controllers/controllers.js'
import LocationsController from '../controllers/controllers.js'
import CombinedController from '../controllers/controllers.js'


const router = express.Router()

// define routes to get events and locations
router.get('/', CombinedController.getMusicEventsAndLocations);

router.get('/events', EventsController.getMusicEvents)
router.get('/events/:id', EventsController.getMusicEventById)

router.get('/locations/:id', LocationsController.getLocationById)
router.get('/locations', LocationsController.getLocations)

router.get('/events/locations/:locationId', EventsController.getMusicEventsByLocationId)


export default router