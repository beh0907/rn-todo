import {Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, View, Keyboard, Alert} from "react-native";
import Input, {IconNames, KeyboardTypes, ReturnKeyTypes} from "../components/Input";
import SafeInputView from "../components/SafeInputView";
import {useEffect, useRef, useState} from "react";
import Button from "../components/Button";
import {signIn} from "../api/Auth";

const SignInScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const passwordRef = useRef(null)

    const onSubmit = async () => {
        if (isLoading || disabled) return

        try {
            setIsLoading(true)
            Keyboard.dismiss()
            const data = await signIn(email, password);
            console.log('data', data)
            setIsLoading(false)
        } catch (e) {
            Alert.alert('로그인 실패', e, [
                {text: '확인', onPress: () => {setIsLoading(false)}}
            ])
        }
    }

    useEffect(() => {
        setDisabled(!email || !password)
    }, [email, password])

    return (
        <SafeInputView>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/main.png')}
                    style={styles.image}
                />
                <Input title={'이메일'} placeholder={'xxx@email.com'} keyboardType={KeyboardTypes.EMAIL}
                       iconName={IconNames.EMAIL}
                       returnKeyType={ReturnKeyTypes.NEXT} value={email}
                       onChangeText={email => setEmail(email.trim())}
                       onSubmitEditing={() => passwordRef.current.focus()}/>
                <Input title={'비밀번호'} returnKeyType={ReturnKeyTypes.DONE} value={password} iconName={IconNames.PASSWORD}
                       onChangeText={password => setPassword(password.trim())} ref={passwordRef} secureTextEntry
                       onSubmitEditing={onSubmit}/>

                <View style={styles.buttonContainer}>
                    <Button title="로그인" onPress={onSubmit} disabled={disabled} isLoading={isLoading}/>
                </View>
            </View>
        </SafeInputView>
    )
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
