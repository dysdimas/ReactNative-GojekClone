import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GopayFeature = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity onPress={props.onPress}>
                <Image source={props.img} />
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15, textAlign: 'center' }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GopayFeature;