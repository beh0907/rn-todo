import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import ListScreen from "../screens/ListScreen";
import {PRIMARY, WHITE} from "../color";
import HeaderLeftButton from "../components/HeaderLeftButton";
import HeaderRightButton from "../components/HeaderRightButton";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        // 최상위 스택 스크린이 시작화면이 되지만
        // initialRouteName 설정으로 원하는 화면을 설정할 수 있다
        <Stack.Navigator
            screenOptions={{
                contentStyle: {backgroundColor: WHITE},
                headerTitleAlign: 'center',
                headerTintColor: PRIMARY.DEFAULT,
                headerTitleStyle: {
                    fontWeight: "700"
                },
                headerLeft: HeaderLeftButton
            }}>
            <Stack.Screen name="List" component={ListScreen}
                          options={{
                              title: 'Todo List',
                              headerRight: HeaderRightButton
                          }}/>

            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    )
}

export default MainStack
