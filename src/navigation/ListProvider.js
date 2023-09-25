import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const ListContext = createContext('');

const ListProvider = ({children}) => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    const data = [];
    axios
      .get('https://mybookstoreapp-2877f-default-rtdb.firebaseio.com/.json')
      .then(result => {
        Object.keys(result.data).forEach(value => {
          const Book = result.data[value];
          Book.addToBag = false;
          Book.addToWishlist = false;
          data.push(Book);
        });
        setItems(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log('Data: ', items);
  return (
    <ListContext.Provider
      value={{
        items,
        setItems,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
