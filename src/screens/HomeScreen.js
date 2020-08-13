import React from "react";
import { TouchableOpacity,View } from "react-native"
import { Text, StyleSheet, Button } from "react-native";


const HomeScreen = props => {
  return (
    <View style={{flex:1}}>
      <Text style={styles.text}>Hi</Text>
      <TouchableOpacity
        style = {styles.touchableOpacityStyle} activeOpacity = {0.8}
        onPress = {() => props.navigation.navigate('Component')}
      >
        <Text style={styles.touchableOpacityTextStyle}>Go to components demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.touchableOpacityStyle} activeOpacity = {0.8}
        onPress = {() => props.navigation.navigate('List')}
      >
        <Text style={styles.touchableOpacityTextStyle}>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginBottom: 10
  },
  touchableOpacityTextStyle: {
    fontSize: 25,
    color: '#ffffff',
    alignSelf:'center'
  }
});

export default HomeScreen;
