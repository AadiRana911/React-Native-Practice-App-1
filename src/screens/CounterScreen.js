import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CHANGE_FACTOR = 1;

const reducer = (state, action) => {
    switch(action.type){
        case "change_increment":
            return {...state, counter: state.counter + action.payload};
        case "change_decrement":
            return {...state, counter: state.counter - action.payload};
    }
}

const CounterScreen = () => {
    let [state, dispatch] = useReducer(reducer, {counter: 0});
    const { counter } = state;
    return(
        <View style = {{marginTop: 10}}>
            <TouchableOpacity style = {[styles.touchableOpacityStyle,{backgroundColor: "#00ff00"}]} activeOpacity = {0.7} onPress = {() => { dispatch({ type: "change_increment", payload: CHANGE_FACTOR }) }}>
                <Text style={styles.touchableOpacityTextStyle}>Increase</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.touchableOpacityStyle,{backgroundColor: "#ff0000"}]} activeOpacity = {0.7} onPress = {() => { dispatch({ type: "change_decrement", payload: CHANGE_FACTOR }) } }>
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