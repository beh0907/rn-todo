import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet, View} from "react-native";
import {GRAY} from "../color";
import ListItem from "./ListItem";

const Separator = () => {
    return <View style={styles.separator}/>
}

const List = ({data, setIsBottom, onDelete, onToggle}) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data} windowSize={2}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={() => <View style={{height: 10}}/>}
                onScroll={({nativeEvent: {contentOffset, layoutMeasurement, contentSize}}) => {
                    const distance = contentSize.height - (contentOffset.y + layoutMeasurement.height);
                    setIsBottom(!(distance > 20 || contentOffset.y === 0));
                }}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <ListItem item={item} onDelete={onDelete} onToggle={onToggle}/>}/>
        </View>
    );
};

List.propTypes = {
    data: PropTypes.array.isRequired,
    setIsBottom: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: GRAY.LIGHT,
        marginVertical: 10,
        marginHorizontal: 10
    }
})

export default List;
