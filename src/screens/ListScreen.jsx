import React from "react";
import EmptyList from "../components/EmptyList";
import List from "../components/List";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {View} from "react-native";
import InputFAB from "../components/InputFAB";

const ListScreen = () => {
    const {bottom} = useSafeAreaInsets()
    const todos = []

    return (
        <View style={{flex: 1, paddingBottom: bottom}}>
            {todos.length ? <List data={todos}/> : <EmptyList/>}
            <InputFAB/>
        </View>
    )
}

export default ListScreen
