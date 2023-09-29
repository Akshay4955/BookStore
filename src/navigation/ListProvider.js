import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const ListContext = createContext('');

const ListProvider = ({children}) => {
  const [items, setItems] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);

  const getItems = () => {
    const data = [];
    axios
      .get('https://mybookstoreapp-2877f-default-rtdb.firebaseio.com/.json')
      .then(result => {
        Object.keys(result.data).forEach(value => {
          const Book = result.data[value];
          Book.addToBag = false;
          Book.addToWishlist = false;
          Book.quantity = 0;
          data.push(Book);
        });
        setItems(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <ListContext.Provider
      value={{
        items,
        setItems,
        recentSearch,
        setRecentSearch,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
