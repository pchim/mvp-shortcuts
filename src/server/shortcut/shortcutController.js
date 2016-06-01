import Q from 'q';
import Shortcut from './shortcut.js';

//const addBulk = Q.nbind(Shortcut.add)
module.exports = {
  insertMany: (shortcuts) => {
    Shortcut.insertMany(shortcuts)
      .then( output => {
        console.log('Success on inserts!: ', output);
      })
  }
};