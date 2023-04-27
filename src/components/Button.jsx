import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Pressable, StyleSheet, Text, View} from "react-native";
import {GRAY, PRIMARY, WHITE} from "../color";

const Button = ({title, disabled, isLoading, ...props}) => {
    return (
        <Pressable {...props}
                   disabled={disabled}
                   style={({pressed}) => [
                       styles.container,
                       pressed && {backgroudColor: PRIMARY.DARK},
                       disabled && {backgroudColor: PRIMARY.LIGHT, opacity: 0.6},
                   ]}>

            {isLoading ?
                <ActivityIndicator size={"small"} color={GRAY.DEFAULT}/>
                :
                <Text style={styles.title}>{title}</Text>
            }


        </Pressable>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY.DARK
    },
    title: {
        color: WHITE,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20
    }
})

export default Button;
