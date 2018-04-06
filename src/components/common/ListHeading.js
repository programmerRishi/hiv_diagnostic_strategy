import React from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './CardSection';

const ListHeading = ({ firstHeading, secondHeading, thirdHeading }) => {
  const { cardSectionStyle, textStyle, viewStyle } = styles;
  return (
    <CardSection style={cardSectionStyle}>
    <View style={viewStyle}>
    <Text style={textStyle}>
    {firstHeading}
    </Text>
    </View>
    <View style={[viewStyle, { flex: 1 }]}>
    <Text style={textStyle}>
    {secondHeading}
    </Text>
    </View>
    <View style={viewStyle}>
    <Text style={textStyle}>
    {thirdHeading}
    </Text>
    </View>

    </CardSection>
  );
};

const styles = {
   cardSectionStyle: {
     backgroundColor: '#E67E22',
     marginBottom: 4,
     borderBottomWidth: 0,
     justifyContent: 'space-around',
     flexWrap: 'wrap'
   },
   textStyle: {
     color: '#000',
     fontSize: 22,
     fontFamily: 'JosefinSans-Bold'

   },
   viewStyle: {
     flex: 2,
     paddingLeft: 3
   }
};

export { ListHeading };
