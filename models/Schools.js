import { DataTypes } from "sequelize";
import {dbInstance} from '../database/index.js';

const School = dbInstance.define('Schools', {
    title : {
        type: DataTypes.STRING,
        allowNull: false 
    },
    location: {
        type: DataTypes.STRING
    },
    author: {
     type: DataTypes.INTEGER,
     allowNull: false 
    }
});

export default School;
