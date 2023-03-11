import express from "express"
const { getAllAppointments, getSingleAppointment, deleteAppointment } = require('../controllers/scheduleController')


const router = express.Router();

router.get('/appointments', getAllAppointments);
router.get('/appointments/:id', getSingleAppointment);
router.get('/appointments/delete/:id', deleteAppointment);

module.exports = router;
