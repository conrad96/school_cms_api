import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'

dotenv.config({path: '.env'}); 

const {DB_PORT, DB_NAME, DB_USERNAME, DB_HOST, DB_PASSWORD, DB_DIALECT} = process.env;

const dbInstance = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    'host': DB_HOST,
    'dialect': DB_DIALECT,
    'port': DB_PORT,
    'logging': false
});
 
// console.log(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_PORT);
// const dbInstance = new Sequelize(process.env.DB_NAME , process.env.DB_USERNAME, process.env.DB_PASSWORD, 
//     {
//     'host': process.env.DB_HOST,
//     'dialect': 'mariadb',
//     'port': process.env.DB_PORT
//     });

const authenticate = async () => {
    try {
        await dbInstance.authenticate();
    }catch(error) {
        console.error(`Unable to connect to Database: ${error}`);
    }
}

const closeConnection = async () => {
    dbInstance.close();
}

export {
    dbInstance, authenticate
};
export { Op } from 'sequelize';