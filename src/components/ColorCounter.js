import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SquareScreen = ({ color, backgroundColorMore, backgroundColorLess, increase, decrease }) => {
    return(
        <View>
            <Text style = {[styles.touchableOpacityTextStyle,{color: "#000000"}]}>{color}</Text>
            <TouchableOpacity style = {[styles.touchableOpacityStyle,{backgroundColor: backgroundColorMore}]} onPress = {() => increase()}>
                <Text style={styles.touchableOpacityTextStyle}>{`More ${color}`}</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.touchableOpacityStyle,{backgroundColor: backgroundColorLess}]} onPress = {() => decrease()}>
                <Text style={styles.touchableOpacityTextStyle}>{`Less ${color}`}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
      },
      touchableOpacityStyle: {
        // backgroundColor: '#660000',
        padding:10,
        width:'60%',
        borderRadius: 30,
        alignSelf: 'center',
        marginBottom: 15
      },
      touchableOpacityTextStyle: {
        fontSize: 15,
        color: '#ffffff',
        alignSelf:'center'
      }
});

export default SquareScreen;