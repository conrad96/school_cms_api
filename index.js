import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import routes from './routes/index.js';
const app = express();
 
app.use( cors());
app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json());
app.use('/', routes);

const PORT = 3030;
app.listen(PORT, () => {
    console.log(`School CMS API is running on ${PORT}`);
})
