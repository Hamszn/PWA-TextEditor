import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>{
  //
  const jateDB = await openDB("jate",1);
  //
  const tx = jateDB.transations("jate","readwrite");
  //
  const store = tx.objectStore("jate");
  //
  const request = store.put({id: 1, value: content});
  //
  const result = await request;
  console.log(" data saved to database", result);
};
 console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>{
  const jateDB = await openDB("jate",1);
  //
  const tx = jateDB.transations("jate","readonly");
  //
  const store = tx.objectStore("jate");
  //
  const request = store.getAll();
  //
  const result = await request;
  console.log("data read from databse", result);
  return result.value
}; 
console.error('getDb not implemented');

initdb();
