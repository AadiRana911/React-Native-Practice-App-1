import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const CHANGE_FACTOR = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change, callback) => {
        color + change > 255 || color + change < 0 ? null : callback(color + change);
    }

    return(
        <View>
            <ColorCounter color = "Red" backgroundColorMore = "rgba(255,0,0,1)" backgroundColorLess = "rgba(255,0,0,0.5)" increase = {() => setColor( red, CHANGE_FACTOR, setRed )} decrease = {() => setColor( red, -1 * CHANGE_FACTOR, setRed )}/>
            <ColorCounter color = "Green" backgroundColorMore = "rgba(0,255,0,1)" backgroundColorLess = "rgba(0,255,0,0.5)" increase = {() => setColor( green, CHANGE_FACTOR,setGreen )} decrease = {() => setColor( green, -1 * CHANGE_FACTOR, setGreen )}/>
            <ColorCounter color = "Blue" backgroundColorMore = "rgba(0,0,255,1)" backgroundColorLess = "rgba(0,0,255,0.5)" increase = {() => setColor( blue, CHANGE_FACTOR, setBlue )} decrease = {() => setColor( blue, -1 * CHANGE_FACTOR, setBlue )}/>
            <View style = { { height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` } } />
        </View>
    );
}

const styles = StyleSheet.create({
    nvStyle: {
        height: 150, width: 150, backgroundColor: `rgb(0,0,0)`
    }
});
export default SquareScreen;