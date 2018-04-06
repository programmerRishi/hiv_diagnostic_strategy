import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { cardSectionStyle, textStyle, containerStyle } = styles;
  return (
  <Modal
  visible={visible}// has value either true or false used to show or hide the modal
  transparent
  animationType="slide"
  onRequestClose={() => {}}// it is must for android app
  >

  <View style={containerStyle}>

  <CardSection style={cardSectionStyle}>
  <Text style={textStyle}>
  {children}
  </Text>
  </CardSection>

  <CardSection>
  <Button onPress={onAccept}/* here we are passing reference to the function, we are not invoking it */>Yes</Button>
  <Button onPress={onDecline}>No</Button>
  </CardSection>

  </View>

  </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }

};

export { Confirm };
