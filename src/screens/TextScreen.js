import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [Password, setPassword] = useState('')
    return (
        <View>
            <Text style = {styles.text}>Enter Your Password</Text>
            <TextInput style = {[styles.input,{borderBottomColor: Password.length < 8? '#ff0000':'#00ff00',color: Password.length < 8? '#ff0000':'#00ff00'}]} autoCapitalize = "none" autoCorrect = {false} value = {Password} onChangeText = {newValue => setPassword(newValue)} secureTextEntry = {true}/>
            <Text style = {[styles.text,{color: Password.length < 8? '#ff0000':'#00ff00'}]}>My Password is {Password}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "rgb(100,100,100)",
        width: "60%",
        marginHorizontal: 25,
        padding: 5,
        fontSize: 15,
        color: "#ff00ff",        
    },
    text: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20
    }
});

export default TextScreen;