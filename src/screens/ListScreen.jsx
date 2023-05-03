import React, {useEffect, useState} from "react";
import EmptyList from "../components/EmptyList";
import List from "../components/List";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Alert, View} from "react-native";
import InputFAB from "../components/InputFAB";
import {nanoid} from "nanoid";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";

const ListScreen = () => {
    const {bottom} = useSafeAreaInsets()
    const [todos, setTodos] = useState([])
    const [isBottom, setIsBottom] = useState(false)
    const {getItem, setItem} = useAsyncStorage('todos')

    const save = async (data) => {
        try {
            await setItem(JSON.stringify(data))
            setTodos(data)
        } catch (e) {
            Alert.alert('데이터 저장 오류', '데이터 저장에 실패했습니다')
        }
    }

    const load = async () => {
        try {
            const data = await getItem()
            const todos = JSON.parse(data || '[]')
            setTodos(todos)
        } catch (e) {
            Alert.alert('데이터 로드 오류', '데이터 불러오기를 실패했습니다')
        }
    }

    const onInsert = (task) => {
        const id = nanoid()
        save([...todos, {id, task, isDone: false}])
    }

    const onDelete = (id) => {
        save(todos.filter(todo => todo.id !== id))
    }
    const onToggle = (id) => {
        save(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <View style={{flex: 1, paddingBottom: bottom}}>
            {todos.length ? <List data={todos} setIsBottom={setIsBottom} onDelete={onDelete} onToggle={onToggle}/> : <EmptyList/>}
            <InputFAB onInsert={onInsert} isBottom={isBottom}/>
        </View>
    )
}

export default ListScreen
