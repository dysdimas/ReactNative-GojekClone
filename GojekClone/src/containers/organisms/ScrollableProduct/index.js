import React, { Component } from "react";
import { View, Image, Text, ScrollView } from 'react-native';
import ScrollableItem from "../../../components/molecules/ScrollableItems";

class ScrollableProduct extends Component {
    render() {
        return (
            <View>
                <View style={{ height: 15, width: 60, marginLeft: 16 }}>
                    <Image source={require('../../../assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C' }}>Nearby Restaurants</Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}>See All</Text>
                </View>
                <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
                    <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                    <ScrollableItem title="Bakmi Gm Aeon Mall" img={require('../../../assets/dummy/go-food-gm.jpg')} />
                    <ScrollableItem title="Martabak Orins" img={require('../../../assets/dummy/go-food-orins.jpg')} />
                    <ScrollableItem title="Martabak Bangka" img={require('../../../assets/dummy/go-food-banka.jpg')} />
                    <ScrollableItem title="Ayam Bakar Pak Boss" img={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
                </ScrollView>
                <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginHorizontal: 16, marginBottom: 20 }}></View>
            </View>
        )
    }
}

export default ScrollableProduct;