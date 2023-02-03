import express from "express";
import {index} from '../controllers/index.js';

//models
import School from "../models/Schools.js";
import Users from "../models/Users.js";

const router = express.Router();

router.get('/', index);

router.post('/schools', async (req, res) => {
    const {title, location, author} = req.body;

    const newSchool = {title, location, author};

    try {
        const add = await School.create(newSchool);

        res.status(200).send({message: 'School added successfully'});
    }catch(error) {

        res.status(500).send({message: `School not added:  ${error}`});
    }
});

router.get('/schools', async (req, res) => {

    try {
        const records = await School.findAll();

        res.status(200).send(records);
    }catch (error){
        res.status(400).send({ message: `No records found.`});
    }

    res.send({message: 'Schools list'});
});

export default router;
