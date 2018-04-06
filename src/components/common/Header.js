//import library for making a Component
import React from 'react';
import { Text, View } from 'react-native';
// make a header Component
const Header = (props) => {
  const { headerLeft, headerRight } = props;
  const { textStyle, viewStyle } = styles;
  return (
     //(headerText ke jagah kuchh bhi likh sakte hai jaise 'thingsToShow' ya 'Chutiya')
    <View style={viewStyle}>

    <View style={{ flex: 1, paddingLeft: 5, paddingBottom: 3 }}>
    {headerLeft}
    </View>

    <View style={{ flex: 3, alignItems: 'center' }}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>

    <View style={{ flex: 1, paddingRight: 5, paddingBottom: 3 }}>
    {headerRight}
    </View>

    </View>
);
};
const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#2c3e50',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 1.0,

    /* This 'elevation' property is must to apply shadow property because there is a bug
    in react-native*/
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
};
// make the component available to other parts of the App
export { Header };
