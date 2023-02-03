import { DataTypes } from "sequelize";
import {dbInstance} from '../database/index.js';

const Users = dbInstance.define('Users', {
    firstName : {
        type: DataTypes.STRING,
        allowNull: false 
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'teacher', 'student'),
        allowNull: false 
    },
    isActive : {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: ['Y']
    }
});

export default Users;
