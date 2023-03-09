import express, { Express } from "express";
const {getUsers, createUser, updateUser} = require('../controllers/userController')
const cookieParser = require('cookie-parser')

const router = express.Router()

router.use(cookieParser());

router.get('/', getUsers);
router.post('/signup', createUser);
router.put('/profile/:id', updateUser);

module.exports = router;