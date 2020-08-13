import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: 20},
        {name: 'Friend 2', age: 30},
        {name: 'Friend 3', age: 22},
        {name: 'Friend 4', age: 21},
        {name: 'Friend 5', age: 19},
    ];
    return (
        // <Text>Hi There</Text>
        <FlatList
            showsVerticalScrollIndicator = {false}
            style = {styles.listStyle}
            keyExtractor = {(item,index) => item+index.toString()}
            data = {friends}
            renderItem = {({item}) => {
                return <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        ></FlatList>
    );
}

const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 10,
        marginLeft: 10,
        padding: 4
    },
    textStyle:{
        paddingBottom: 5
    }
});

export default ListScreen;