import React, {useEffect, useRef, useState} from 'react';
import {Keyboard, Platform, Pressable, StyleSheet, TextInput, useWindowDimensions, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {PRIMARY, WHITE} from "../color";

const BOTTOM = 30

const InputFAB = () => {
    const [text, setText] = useState('');
    const [isOpened, setIsOpened] = useState(false);
    const inputRef = useRef();
    const windowWidth = useWindowDimensions().width;
    const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM)

    const open = () => {
        console.log('22222')
        inputRef.current.focus()
        setIsOpened(true)
    }

    const close = () => {
        inputRef.current.blur()
        setText('')
        setIsOpened(false)
    }

    const onPressButton = () => {
        isOpened ? close() : open()
    }

    useEffect(() => {
        if (Platform.OS === 'ios') {
            Keyboard.addListener('keyboardWillShow', e => {
                setKeyboardHeight(e.endCoordinates.height + BOTTOM)
            })
            Keyboard.addListener('keyboardWillHide', e => {
                setKeyboardHeight(BOTTOM)
            })
        }
    }, [])

    return (
        <>
            <View
                style={[styles.position, styles.shape, {
                    justifyContent: 'center',
                    bottom: keyboardHeight
                }, isOpened && {width: windowWidth - 20}]}>
                <TextInput value={text} onChangeText={text => setText(text)}
                           style={styles.input} autoCapitalize={"none"}
                           autoCorrect={false} textContentType={"none"}
                           keyboardAppearance={"light"} returnKeyType={"done"}
                           ref={inputRef} onBlur={close}/>
            </View>

            <Pressable style={({pressed}) => [
                styles.position,
                styles.shape,
                styles.button,
                pressed && {backgroundColor: PRIMARY.DARK},
                {bottom: keyboardHeight}
            ]}
                       onPress={onPressButton}>
                <MaterialCommunityIcons name={"plus"} size={24} color={WHITE}/>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    position: {
        position: 'absolute',
        bottom: BOTTOM,
        right: 10,
    },
    shape: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: PRIMARY.DEFAULT
    },
    input: {
        color: WHITE,
        paddingLeft: 20,
        paddingRight: 70
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default InputFAB;
