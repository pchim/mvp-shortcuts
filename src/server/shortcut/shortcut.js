import mongoose from 'mongoose';

const shortcutSchema = mongoose.Schema({
  question: String,
  answer: String
});

const Shortcut = mongoose.model('Shortcut', shortcutSchema);

export default Shortcut;