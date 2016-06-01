//import mongoose from 'mongoose';
import { db } from '../server.js';

const shortcutSchema = db.Schema({
  question: String,
  answer: String
});

const Shortcut = db.model('Shortcut', shortcutSchema);

export default Shortcut;