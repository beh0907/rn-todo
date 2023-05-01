import {StatusBar} from 'expo-status-bar';
import React from "react";
import {UserProvider} from "./contexts/UserContext";
import Navigation from "./navigations/Navigation";

const App = () => {
    return (
        <UserProvider>
            <StatusBar style="dark"/>
            <Navigation/>
        </UserProvider>
    );
}

export default App
