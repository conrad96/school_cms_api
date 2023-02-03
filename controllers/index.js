import {dbInstance, authenticate} from '../database/index.js';


//keep in sync
(async ()=> {
    await dbInstance.sync({ alter: true })
})();

//export const 
export const index = async (request, response) => {
    authenticate();
    response.send({ message: 'Loading...' });
}
