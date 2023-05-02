import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet, View} from "react-native";
import {GRAY} from "../color";
import ListItem from "./ListItem";

const Separator = () => {
    return <View style={styles.separator}/>
}

const List = ({data}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data} windowSize={2}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={() => <View style={{height: 10}}/>}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <ListItem item={item}/>}/>
        </View>
    );
};

List.propTypes = {
    data: PropTypes.array.isRequired
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
