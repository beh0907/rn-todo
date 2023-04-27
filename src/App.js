import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./navigations/AuthStack.jsx";

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar style="dark"/>
            <AuthStack/>
        </NavigationContainer>
    );
}

export default App
