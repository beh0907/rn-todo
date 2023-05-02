import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {GRAY, PRIMARY} from "../color";

const EmptyList = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/main.png')} style={styles.image}/>
            <Text style={styles.text}>할 일을 추가해주세요</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: 200
    },
    text: {
        marginTop: 10,
        color: PRIMARY.DARK,
        fontSize: 18,
        fontWeight: '700'
    }
})

export default EmptyList;
