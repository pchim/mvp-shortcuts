import express from 'express';
import bodyParser from 'bodyParser';
import mongoose from 'mongoose';

// server and database
const app = express();
const db = mongoose.connect('mongodb://localhost:27017/shortcuts');

// middlewares
app.use(bodyParser.json());
require('./routes/routes.js')(app);

// listen to port
const server = app.listen(1337);

export {db, server};
