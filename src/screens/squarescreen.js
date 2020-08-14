import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const CHANGE_FACTOR = 5;

const reducer = (state, action) => {
    switch(action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload <0 ? state : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload <0 ? state : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload <0 ? state : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;


    return(
        <View>
            <ColorCounter color = "Red" backgroundColorMore = "rgba(255,0,0,1)" backgroundColorLess = "rgba(255,0,0,0.5)" increase = {() => dispatch({type: 'change_red',payload: CHANGE_FACTOR})} decrease = {() => dispatch({type: 'change_red',payload: -1 * CHANGE_FACTOR})}/>
            <ColorCounter color = "Green" backgroundColorMore = "rgba(0,255,0,1)" backgroundColorLess = "rgba(0,255,0,0.5)" increase = {() => dispatch({type: 'change_green',payload: CHANGE_FACTOR})} decrease = {() => dispatch({type: 'change_green',payload: -1 * CHANGE_FACTOR})}/>
            <ColorCounter color = "Blue" backgroundColorMore = "rgba(0,0,255,1)" backgroundColorLess = "rgba(0,0,255,0.5)" increase = {() => dispatch({type: 'change_blue',payload: CHANGE_FACTOR})} decrease = {() => dispatch({type: 'change_blue',payload: -1 * CHANGE_FACTOR})}/>
            <View style = { { height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` } } />
        </View>
    );
}

export default SquareScreen;