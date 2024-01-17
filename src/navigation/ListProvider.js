import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import remoteConfig from '@react-native-firebase/remote-config';

export const ListContext = createContext('');

const ListProvider = ({children}) => {
  const [items, setItems] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchRemoteConfigData = () => {
    remoteConfig()
      .setDefaults({
        show_data_home_screen: false,
        test_data: 234,
      })
      .then(() => remoteConfig().fetchAndActivate(0))
      .then(fetchedRemotely => {
        if (fetchedRemotely) {
          console.log('Configs were retrieved from the backend and activated.');
          const result = remoteConfig().getValue('show_data_home_screen');
          const testResult = remoteConfig().getValue('test_data');
          console.log('result is ', result, ' Test data is', testResult);
        } else {
          console.log(
            'No configs were fetched from the backend, and the local configs were already activated',
          );
          const result = remoteConfig().getValue('show_data_home_screen');
          const testResult = remoteConfig().getValue('test_data');
          console.log('result is ', result, ' Test data is', testResult);
        }
      })
      .catch(error => {
        console.log('Error ', error);
      });

    // .then(() => remoteConfig().fetchAndActivate(60))
    // .then(() => {
    //   console.log('Test message');
    //   const result = remoteConfig().getValue('show_data_home_screen');
    //   const testResult = remoteConfig().getValue('test_data');
    //   console.log('result is ', result, ' Test data is', testResult);
    // })
    // .catch(error => {
    //   console.error('Error fetching remote config:', error);
    // });

    // remoteConfig()
    //   .setDefaults({
    //     show_data_home_screen: false,
    //     test_data: 234,
    //   })
    //   .then(() => remoteConfig().fetchAndActivate())
    //   .then(
    //     fetchedRemotely => {},
    //     //   () => {
    //     //   result = remoteConfig().getValue('show_data_home_screen');
    //     //   testResult = remoteConfig().getValue('test_data');
    //     //   console.log('result is ', result, ' Test data is', testResult);
    //     // }
    //   );

    // const result = remoteConfig().getValue('show_data_home_screen');
    // const testResult = remoteConfig().getValue('test_data');
    // console.log('result is ', result, ' Test data is', testResult);
  };

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
    fetchRemoteConfigData();
  }, []);

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
