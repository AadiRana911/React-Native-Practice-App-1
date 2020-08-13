import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const SquareScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors)
    return(
        <View style = {{flex: 1, margin: 10}}>
            <TouchableOpacity style = {styles.touchableOpacityStyle} activeOpacity = {0.7} onPress = {() => {setColors([...colors, randomRGB()]);}}>
                <Text style={styles.touchableOpacityTextStyle}>Add a color</Text>
            </TouchableOpacity>
            <View style = { { height: 100, width: 100, backgroundColor: randomRGB() } }></View>
        </View>
    );
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
      },
      touchableOpacityStyle: {
        backgroundColor: '#660000',
        padding:10,
        width:'90%',
        borderRadius: 30,
        alignSelf: 'center',
        marginBottom: 15
      },
      touchableOpacityTextStyle: {
        fontSize: 25,
        color: '#ffffff',
        alignSelf:'center'
      }
});

export default SquareScreen;