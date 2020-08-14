import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, marginTop: 10, marginLeft: 10}}>
      <TouchableOpacity
        style = {styles.touchableOpacityStyle} activeOpacity = {0.7}
        onPress = {() => navigation.navigate('Component')}
      >
        <Text style={styles.touchableOpacityTextStyle}>Go to components demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.touchableOpacityStyle} activeOpacity = {0.7}
        onPress = {() => navigation.navigate('List')}
      >
        <Text style={styles.touchableOpacityTextStyle}>Go to list demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.touchableOpacityStyle} activeOpacity = {0.7}
        onPress = {() => navigation.navigate('Image')}
      >
        <Text style={styles.touchableOpacityTextStyle}>Go to image demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.touchableOpacityStyle} activeOpacity = {0.7}
        onPress = {() => navigation.navigate('Counter')}
      >
        <Text style={styles.touchableOpacityTextStyle}>Go to Counter demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.touchableOpacityStyle} activeOpacity = {0.7}
        onPress = {() => navigation.navigate('Color')}
      >
        <Text style={styles.touchableOpacityTextStyle}>Go to Colors demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.touchableOpacityStyle} activeOpacity = {0.7}
        onPress = {() => navigation.navigate('Square')}
      >
        <Text style={styles.touchableOpacityTextStyle}>Go to Square demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.touchableOpacityStyle} activeOpacity = {0.7}
        onPress = {() => navigation.navigate('Text')}
      >
        <Text style={styles.touchableOpacityTextStyle}>Go to Text Input demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  touchableOpacityStyle: {
    backgroundColor: '#ff00ff',
    padding:5,
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
