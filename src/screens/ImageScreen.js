import React from 'react';
import { view, Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title = "Forest"  source = {require('../../assets/images/forest.jpg')} score = "6"/>
            <ImageDetail title = "Beach"  source = {require('../../assets/images/beach.jpg')} score = "4"/>
            <ImageDetail title = "Mountain"  source = {require('../../assets/images/mountain.jpg')} score = "7"/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageScreen;