import React from 'react'
import { View, Image, Text } from 'react-native';

const MainFeature = (props) => {
    return (
        <View style={{ width: '25%', alignItems: 'center', marginBottom: 18 }}>
            <View style={{ width: 58, height: 58, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#EFEFEF', borderRadius: 18 }}>
                <Image source={props.img} />
            </View>
            <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>{props.title}</Text>
        </View>
    )
}

export default MainFeature;