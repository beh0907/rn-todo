import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import {PRIMARY, WHITE} from "../color";

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        // 최상위 스택 스크린이 시작화면이 되지만
        // initialRouteName 설정으로 원하는 화면을 설정할 수 있다
        <Stack.Navigator
            screenOptions={{
                contentStyle: {backgroundColor: WHITE},
                headerShown: false
            }}>

            <Stack.Screen name="SignIn" component={SignInScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack
