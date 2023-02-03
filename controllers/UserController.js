import Users from "../models/Users.js";
import bcrypt from "bcrypt";

export const fetchUsers = async (req, res)=> {

    try {
        const userRecords = await Users.findAll(); 
        res.status(200).send(userRecords)
    } catch (error) {
        res.status(404).send({error});
    }
}


export const addNewUser = async (req, res)=> {
    const {firstName, lastName, username, password, role} = req.body;

    try {
        const encryptedPassword = await hashPassword(password);

        const addRecord = await Users.create({firstName, lastName, username, password: encryptedPassword, role});

        res.status(200).send({message: 'user added successfully'});
    } catch (error) {
        res.status(500).send({message: `error occured! user not added (${error}) `});
    }
}

const hashPassword = async rawPassword => {
    return  await bcrypt.hash(rawPassword, 10);
}