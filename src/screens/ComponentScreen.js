import React from 'react';
import { Text , StyleSheet , View } from 'react-native';

const ComponentScreen = () => {
    const myName = 'Asad Imtiaz Rana';
    return (
        <View>
            <Text style = {styles.greeting}>Welcome to react native!</Text>
            <Text style = {styles.name}>My name is {myName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    greeting:{
        fontSize: 20
    },
    name:{
        fontSize: 10
    }
});

export default ComponentScreen;