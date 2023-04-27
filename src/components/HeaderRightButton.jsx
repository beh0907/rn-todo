import React from 'react';
import PropTypes from 'prop-types';
import {Pressable} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const HeaderRightButton = ({tintColor}) => {
    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.navigate('Settings')}>
            <MaterialCommunityIcons name="cog"
                                    size={20}
                                    color={tintColor}
            />
        </Pressable>
    );
};

HeaderRightButton.propTypes = {
    tintColor: PropTypes.string
};

export default HeaderRightButton;
