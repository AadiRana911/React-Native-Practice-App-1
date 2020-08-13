import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({ source, title, score }) => {
    return (
        <View>
        <Image source={ source } style ={{height: 100, width: 100}} />
        <Text>Title: { title }</Text>
        <Text>Score: { score }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default ImageDetail;