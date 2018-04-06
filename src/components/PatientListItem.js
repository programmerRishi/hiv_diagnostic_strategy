import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { capturePatientPropsData } from '../actions/PatientActions';

class PatientListItem extends Component {
   onTouchableOpacityPress = () => {
   const { navigation, data } = this.props;
   this.props.capturePatientPropsData({ data });
   navigation.navigate('finalReport');
 }
  render() {
    const { name, age, sex, address } = this.props.data;
    const { cardSectionStyle, textStyle, viewStyle } = styles;
    return (
      <TouchableOpacity
        onPress={this.onTouchableOpacityPress.bind(this)}
      >
      <CardSection style={cardSectionStyle}>
      <View style={viewStyle}>
      <Text style={textStyle}>
        {name}
      </Text>
      </View>
      <View style={[viewStyle, { flex: 1 }]}>
      <Text style={textStyle}>
        {age}/{sex}
      </Text>
      </View>
      <View style={viewStyle}>
      <Text style={textStyle}>
        {address}
      </Text>
      </View>
      </CardSection>
      </TouchableOpacity>
    );
  }
}

const styles = {
   cardSectionStyle: {
     backgroundColor: '#e3a10faa',
     marginBottom: 4,
     borderBottomWidth: 0,
   },
   textStyle: {
     color: '#000',
     fontSize: 18,
   },
   viewStyle: {
     flex: 2,
     paddingLeft: 3
   }

};

export default connect(null, { capturePatientPropsData })(PatientListItem);
