import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CounterScreen = () => {
    let [counter, setCounter] = useState(0);
    return(
        <View style = {{marginTop: 10}}>
            <TouchableOpacity style = {[styles.touchableOpacityStyle,{backgroundColor: "#00ff00"}]} activeOpacity = {0.7} onPress = {() => { setCounter(counter+1) }}>
                <Text style={styles.touchableOpacityTextStyle}>Increase</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.touchableOpacityStyle,{backgroundColor: "#ff0000"}]} activeOpacity = {0.7} onPress = {() => { setCounter(counter-1) } }>
                <Text style={styles.touchableOpacityTextStyle}>Decrease</Text>
            </TouchableOpacity>
            <Text style = { styles.text }>Counter Screen {counter}</Text>
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

export default CounterScreen;