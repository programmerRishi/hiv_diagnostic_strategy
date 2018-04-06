import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
     <View style={[styles.containerStyle, props.style]}>
     {props.children//this statement renders any child tag or component passed to Card
     }
     </View>
     );
    };

const styles = {
containerStyle: {
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.4,
  elevation: 1, // this is required otherwise the shadowOpacity will not be visible
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10

}
};
export { Card };
