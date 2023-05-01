import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Pressable, StyleSheet, Text, View} from "react-native";
import {GRAY, PRIMARY, WHITE, DANGER} from "../color";

export const ButtonTypes = {
    PRIMARY: 'PRIMARY',
    DANGER: 'DANGER'
}

const Button = ({title, disabled, isLoading, buttonType, onPress}) => {

    const colors = {PRIMARY, DANGER}

    return (
        <Pressable onPress={onPress}
                   disabled={disabled}
                   style={({pressed}) => [
                       styles.container,
                       {backgroudColor: colors[buttonType].DEFAULT},
                       pressed && {backgroudColor: colors[buttonType].DARK},
                       disabled && {backgroudColor: colors[buttonType].LIGHT, opacity: 0.6},
                   ]}>

            {isLoading ?
                <ActivityIndicator size={"small"} color={GRAY.DEFAULT}/>
                :
                <Text style={styles.title}>{title}</Text>
            }


        </Pressable>
    );
}

Button.defaultProps = {
    buttonType: ButtonTypes.PRIMARY
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    buttonType: PropTypes.oneOf(Object.values(ButtonTypes))
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: WHITE,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20
    }
})

export default Button;
