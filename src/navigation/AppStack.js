import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import MyBag from '../screens/MyBag';
import Order from '../screens/Order';
import Search from '../screens/Search';
import SearchResult from '../screens/SearchResult';
import WishList from '../screens/WishList';
import ListProvider from '../navigation/ListProvider';

const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyBag" component={MyBag} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="WishList" component={WishList} />
    </Stack.Navigator>
  );
};

export default AppStack;
