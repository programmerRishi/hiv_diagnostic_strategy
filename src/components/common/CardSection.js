import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    /* in the array of style objects,
    the object on the most rear right will override the properties in all other style objects */
     <View style={[styles.containerStyle, props.style]}>
       {props.children}
     </View>
     );
    };

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
