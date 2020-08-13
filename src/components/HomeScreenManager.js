import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreenManager = ({gotoLocation}) => {
    return(
        <TouchableOpacity style = {styles.touchableOpacityStyle} activeOpacity = {0.7} onPress = {() => navigation.navigate(`../screens/${gotoLocation}`)}>
            
            <Text style={styles.touchableOpacityTextStyle}>Go to components demo</Text>
        
        </TouchableOpacity>
    );
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

export default HomeScreenManager;