import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from "react-native";

const SettingsScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Settings Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

SettingsScreen.propTypes = {};

export default SettingsScreen;
