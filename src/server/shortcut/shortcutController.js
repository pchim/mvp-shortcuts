import Shortcut from './shortcut.js';

module.exports = {
  insertMany: (shortcuts) => {
    return Shortcut.insertMany(shortcuts)
      // .then( data => {
      //   console.log('Success on inserts! ');
      //   return data;
      // })
  },
  getAll: () => {
    return Shortcut.find({})
      // .then( data => {
      //   console.log('All data retrieved! ');
      //   return data;
      // });
  },
  removeAll: () => {
    return Shortcut.remove({})
      // .then( data => {
      //   console.log('Data wiped! ');
      // })
  }
};