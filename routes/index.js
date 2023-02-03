import express from "express";
import {index} from '../controllers/index.js';
import {addNewUser, fetchUsers} from '../controllers/UserController.js';
import {addSchool, fetchSchools} from '../controllers/SchoolsController.js';

const router = express.Router();

router.get('/', index);

router.post('/schools', addSchool);

router.get('/schools', fetchSchools);

router.get('/users', fetchUsers);

router.post('/users', addNewUser);

export default router;
