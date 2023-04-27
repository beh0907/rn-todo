import {StyleSheet, Text, TextInput, View} from "react-native";
import PropTypes from "prop-types";
import {BLACK, GRAY, PRIMARY} from "../color";
import {forwardRef, useState} from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export const KeyboardTypes = {
    DEFAULT: 'default',
    EMAIL: 'email-address'
}
export const ReturnKeyTypes = {
    DONE: 'done',
    NEXT: 'next'
}
export const IconNames = {
    EMAIL: 'email',
    PASSWORD: 'lock'
}


const Input = forwardRef(({title, placeholder, value, iconName, ...props}, ref) => {
        const [isFocused, setIsFocused] = useState(false)

        return (
            <View style={styles.container}>
                <Text style={[styles.title, value && styles.hasValueTitle, isFocused && styles.focusedTitle]}>{title}</Text>

                <View>
                    <TextInput
                        {...props}
                        ref={ref}
                        style={[styles.input, value && styles.hasValueInput, isFocused && styles.focusedInput]}
                        value={value}
                        placeholder={placeholder ?? title}
                        placeholderTextColor={GRAY.DEFAULT}
                        autoCapitalize='none'
                        autoCorrect={false}
                        textContentType={'none'}
                        keyboardAppearance={'light'}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}/>

                    <View style={styles.icon}>
                        <MaterialCommunityIcons name={iconName} size={20} color={(() => {
                            switch (true) {
                                case isFocused:
                                    return PRIMARY.DEFAULT
                                case !!value:
                                    return BLACK
                                default:
                                    return GRAY.DEFAULT
                            }
                        })()}/>
                        {/*즉시 실행 함수*/}
                    </View>
                </View>
            </View>
        )
    }
)
Input.defaultProps = {
    keyboardType: KeyboardTypes.DEFAULT,
    returnKeyType: ReturnKeyTypes.DONE,
    secureTextEntry: false
}

Input.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    iconName: PropTypes.oneOf(Object.values(IconNames))
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    title: {
        marginBottom: 4,
        color: GRAY.DEFAULT
    },
    focusedTitle: {
        fontWeight: '600',
        color: PRIMARY.DEFAULT
    },
    hasValueTitle: {
        color: BLACK
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 42,
        color: GRAY.DEFAULT,
        borderColor: GRAY.DEFAULT,
        paddingLeft: 30
    },
    focusedInput: {
        color: PRIMARY.DEFAULT,
        borderWidth: 2,
        borderColor: PRIMARY.DEFAULT
    },
    hasValueInput: {
        color: BLACK,
        borderWidth: 2,
        borderColor: BLACK
    },
    icon: {
        position: 'absolute',
        left: 8,
        height: '100%',
        justifyContent: 'center'
    },
})

export default Input
