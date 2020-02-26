import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import Router from './src/config/router';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProduct from './src/containers/organisms/ScrollableProduct';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}

export default App;
