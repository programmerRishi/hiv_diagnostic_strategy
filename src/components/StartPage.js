/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  View,
  Dimensions
} from 'react-native';

class StartPage extends Component {
  static navigationOptions = () => (
    {
  header: null
    }
);

callBack() {
  const { navigation } = this.props;
  setTimeout(() => {
   navigation.navigate('otherScreen');
 }, 1000);
}

  render() {
   const { imageStyle, textStyle, textContainerStyle } = styles;
   return (
    <ImageBackground
    source={require('../aids.png')}
    style={imageStyle}
    >
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <View style={textContainerStyle}>
    <Text style={textStyle}>
    HIV DIAGNOSTIC STRATEGIES
    </Text>
    </View>
    </View>
    {this.callBack()}
    </ImageBackground>
  );
  }

}

const { height, width } = Dimensions.get('window');
const styles = {
  textStyle: {
    fontSize: 38,
    textAlign: 'center',
    fontFamily: 'JosefinSans-BoldItalic',
  },
  textContainerStyle: {
      justifyContent: 'center',
      height: 100,
      borderWidth: 0,
      borderRadius: 3,
      elevation: 8,
  },
  imageStyle: {
     width,
     height,
  }
};

export default StartPage;
