import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    View,
    Keyboard,
    Alert,
} from "react-native";
import Input, {IconNames, KeyboardTypes, ReturnKeyTypes} from "../components/Input";
import SafeInputView from "../components/SafeInputView";
import {useContext, useEffect, useRef, useState} from "react";
import Button from "../components/Button";
import {signIn} from "../api/Auth";
import PropTypes from "prop-types";
import {SafeAreaView} from "react-native-safe-area-context";
import {useUserContext} from "../contexts/UserContext";

const SignInScreen = () => {
    const [email, setEmail] = useState('123@naver.com')
    const [password, setPassword] = useState('123456789')
    const [disabled, setDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const passwordRef = useRef(null)
    const {setUser} = useUserContext()

    const onSubmit = async () => {
        if (isLoading || disabled) return

        try {
            setIsLoading(true)
            Keyboard.dismiss()
            const data = await signIn(email, password);
            setIsLoading(false)

            // 리스트 화면이동 이동
            setUser(data)
        } catch (e) {
            Alert.alert('로그인 실패', e, [
                {
                    text: '확인', onPress: () => {
                        setIsLoading(false)
                    }
                }
            ])
        }
    }

    useEffect(() => {
        setDisabled(!email || !password)
    }, [email, password])

    return (
        <SafeInputView>
            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../../assets/main.png')}
                    style={styles.image}
                />
                <Input title={'이메일'} placeholder={'xxx@email.com'} keyboardType={KeyboardTypes.EMAIL}
                       iconName={IconNames.EMAIL}
                       returnKeyType={ReturnKeyTypes.NEXT} value={email}
                       onChangeText={email => setEmail(email.trim())}
                       onSubmitEditing={() => passwordRef.current.focus()}/>
                <Input title={'비밀번호'} returnKeyType={ReturnKeyTypes.DONE} value={password}
                       iconName={IconNames.PASSWORD}
                       onChangeText={password => setPassword(password.trim())} ref={passwordRef} secureTextEntry
                       onSubmitEditing={onSubmit}/>

                <View style={styles.buttonContainer}>
                    <Button title="로그인" onPress={onSubmit} disabled={disabled} isLoading={isLoading}r/>
                </View>
            </SafeAreaView>
        </SafeInputView>
    )
}

SignInScreen.protTypes = {
    navigation: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200
    },
    buttonContainer: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20
    }
})

export default SignInScreen
