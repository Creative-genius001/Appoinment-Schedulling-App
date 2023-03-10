import express, { Express } from "express";
const {getUser, signup , updateUser, login} = require('../controllers/userController')
const cookieParser = require('cookie-parser')
import Auth from "../auth/auth";

const router = express.Router()

router.use(cookieParser());

router.get('/profile', Auth, getUser);
router.post('/signup', signup);
router.post('/login', login);
router.put('/profile/:id', Auth, updateUser);

module.exports = router;