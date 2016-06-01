import fs from 'fs';
import {db, server} from './dev/server/server.js';
import shortcutController from './dev/server/shortcut/shortcutController.js';

const shortcuts = JSON.parse(fs.readFileSync('./data.json')).data;

shortcutController.removeAll()
  .then( data => {
    shortcutController.insertMany(shortcuts)
      .then( data => {
        console.log('Data Seeded Successfully');
      }).then( () => {
        db.connection.close();
        server.close();
        // shortcutController.getAll()
        //   .then( data => {
        //     console.log('Data in database: ', data);
        //   });
      });
  });
