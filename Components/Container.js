import React from "react";
import { TouchableOpacity, View } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

export const Container = (props) => {
    const {children, showBackButton = true} = props;
    const navigation = useNavigation();

    return(
        <View>
            {showBackButton && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    Back
                </TouchableOpacity>
            )}
            <View>{children}</View>
        </View>
    )
}