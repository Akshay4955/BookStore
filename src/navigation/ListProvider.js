import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ListContext = createContext('');

const ListProvider = ({children}) => {
  const [items, setItems] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const getItems = () => {
    const data = [];
    axios
      .get('https://mybookstoreapp-2877f-default-rtdb.firebaseio.com/.json')
      .then(result => {
        Object.keys(result.data).forEach(value => {
          const Book = result.data[value];
          Book.quantity = 1;
          data.push(Book);
        });
        setItems(data);
      })
      .catch(error => console.log(error));
  };

  const addToCart = title => {
    const updatedCartItems = [...cartItems, title];
    setCartItems(updatedCartItems);
  };

  const removeFromCart = title => {
    const updatedCartItems = cartItems.filter(bookTitle => bookTitle !== title);
    setCartItems(updatedCartItems);
  };

  const addToWishlist = title => {
    const updatedWishlistItems = [...wishlistItems, title];
    setWishlistItems(updatedWishlistItems);
  };

  const removeFromWishlist = title => {
    const updatedWishlistItems = wishlistItems.filter(
      bookTitle => bookTitle !== title,
    );
    setWishlistItems(updatedWishlistItems);
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
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
