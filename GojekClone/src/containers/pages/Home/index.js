import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProduct from '../../../containers/organisms/ScrollableProduct';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                    {/* Search bar */}
                    <SearchFeature />
                    {/* Gopay */}
                    <HomeGoPay />
                    {/* Main feature */}
                    <HomeMainFeature />
                    <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }}></View>
                    {/* News Section */}
                    <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} />
                    {/* Internal infromation section */}
                    <GoInfo />
                    {/* Go-food banner section */}
                    <GoBanner />
                    {/* Nearby section */}
                    <ScrollableProduct />
                </ScrollView>
                <NavBar />
            </View >
        )
    }
}

export default Home;