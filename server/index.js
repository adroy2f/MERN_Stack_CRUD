import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/route.js';
import Connection from './database/db.js';

const app = express();

// To handle HTTP POST requests in Express.js version 4 and above, 
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);

const PORT = '8080';
app.listen(PORT, (error) => {if (error) console.log(error);
console.log("Server listening on PORT", PORT);});
//https://adroy2f-fluffy-invention-qjgg4p99g9pc94p4-8080.preview.app.github.dev/