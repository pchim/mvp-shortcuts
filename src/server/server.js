import express from 'express';
import bodyParser from 'body-parser';
import db from 'mongoose';

// server and database
const app = express();
db.connect('mongodb://localhost:27017/shortcuts');

// middlewares
app.use(bodyParser.json());
//require('./routes/routes.js')(app);

// listen to port
const server = app.listen(1337);

export {db, server};
