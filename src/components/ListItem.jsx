import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {BLACK, DANGER, GRAY, PRIMARY} from "../color";
import {MaterialCommunityIcons} from "@expo/vector-icons";


const ListItem = memo(({item, onDelete, onToggle}) => {
    const checkboxProps = {
        name: item.isDone ? 'checkbox-marked' : 'checkbox-blank-outline',
        color: item.isDone ? PRIMARY.DEFAULT : BLACK,
        size: 20
    }

    return (
        <View style={styles.contatiner}>
            <Pressable onPress={() => onToggle(item.id)} hitSlop={10}>
                <MaterialCommunityIcons {...checkboxProps}/>
            </Pressable>

            <View style={styles.task}>
                <Text style={{fontSize: 20}}>{item.task}</Text>
            </View>

            <Pressable onPress={() => onDelete(item.id)} hitSlop={10}>
                <MaterialCommunityIcons name={"trash-can"} size={20} color={DANGER.DEFAULT}/>
            </Pressable>
        </View>
    )
})

ListItem.displayName = 'ListItem'

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    contatiner: {
        marginHorizontal: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: 'center'
    },
    task: {
        flex: 1,
        marginHorizontal: 10
    }
})

export default ListItem;
