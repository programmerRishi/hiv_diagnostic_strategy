import React, { Component } from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { cancelPatient, addResult } from '../actions/PatientActions';
import { Card, CardSection, CustomModal } from './common';

class FinalReport extends Component {
  static navigationOptions = (props) => (
    { // props passed in her has the following configuration:-
      //{navigation: {…}, screenProps: {…}, navigationOptions: {…}}
      headerTitle: 'FinalReport',
      headerStyle: {
        marginTop: 2,
        backgroundColor: '#e67e22dd',
      },
      headerTitleStyle: {
        fontSize: 25,
        fontFamily: 'JosefinSans-Thin',
        color: '#ecf0f1ff',
        textAlign: 'center', //alignSelf not working
        flexGrow: 1, //textAlign is used with flexGrow to align titel in center
      },

      headerLeft: (
        <View style={{ paddingLeft: 3 }}>
        <Button
        title="Cancel"
        color='#800000'
        // textstyle={{ paddinTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 }}
        // extraButtonStyle={{ marginTop: 5, marginBottom: 5 }}
        onPress={() => {
          // use this line for using components props in navigationOptions
          props.navigation.state.params.cancelPatient();
          props.navigation.navigate('listPatient');
        }
        }
        />
        </View>
        )
    }
  );

state = { showModal: false, modalMessage: '' };

componentDidMount() {
  // this part of the code is used to pass props of the component to navigationOptions
  // these props can be accessed by navigation.state.params
  this.props.navigation.setParams(
    {
      cancelPatient: this.props.cancelPatient
    }
  );
}

decodeStrategy(strategyCode) {
  switch (strategyCode) {
    case '1':
     return 'STRATEGY I';
    case '2':
     return 'STRATEGY IIa';
    case '3':
     return 'STRATEGY IIb';
    case '4':
     return 'STRATEGY III';
    default:
      return '';

  }
}

renderResult() {
 if (this.props.result === 'POSITIVE' || this.props.result === 'NEGATIVE') {
   const color = this.props.result === 'POSITIVE' ? 'green' : 'red';
   const title = this.props.result === 'POSITIVE' ? 'POSITIVE' : 'NEGATIVE';
    return (
      <View
      style={{
         flexDirection: 'row',
         justifyContent: 'flex-start',
         alignItems: 'center'
       }}
      >
      <Text
      style={{ fontSize: 18, color: '#000' }}
      >
      PATIENT IS FOUND TO BE HIV
      </Text>
      <Text>-->></Text>
        <Button
      color={color}
      title={title}
      onPress={() => console.log('')}
        />

    </View>
    );
  }
      return (
        <View
        style={{
           justifyContent: 'flex-start',
           alignItems: 'center'

         }}
        >
        <Text
        style={{ fontSize: 15, color: '#ff0000' }}
        >
        RESULT IS NOT YET ENTERED FOR THIS PATIENT
        </Text>
        <Text style={{ fontSize: 15 }}>
        Please enter whether the report is POSITIVE OR NEGATIVE
        </Text>
        <View
        style={styles.viewStyle}
        >
        <View
        style={{ paddingRight: 8 }}
        >
        <Button
        color='green'
        title='POSITIVE'
        onPress={
          () => {
            this.props.addResult(
            {
               result: 'POSITIVE',
               uid: this.props.uid,
               navigation: this.props.navigation

             }
              );
                }
                  }
        />
        </View>

        <Text style={{ fontSize: 24 }}>OR</Text>

        <View
        style={{ paddingLeft: 8 }}
        >
        <Button
        color='red'
        title='NEGATIVE'
        onPress={
          () => {
            this.props.addResult(
            {
               result: 'NEGATIVE',
               uid: this.props.uid,
               navigation: this.props.navigation

             }
              );
                }
                  }
        />
        </View>

        </View>
        </View>
      );
}

  render() {
    console.log(Dimensions);
    const { textStyle, textStyleHeading, cardSectionStyle, cardStyle } = styles;
    return (
    <Card style={cardStyle}>
    <CardSection style={cardSectionStyle}>
    <Text style={textStyleHeading}>Name :-</Text>
    <Text style={textStyle}>{this.props.name}</Text>

    </CardSection>
    <CardSection style={cardSectionStyle}>
    <Text style={textStyleHeading}>Age/Sex :-</Text>
    <Text style={textStyle}>{this.props.age}/{this.props.sex}</Text>

    </CardSection>
    <CardSection style={cardSectionStyle}>
    <Text style={textStyleHeading}>Address :-</Text>
    <Text style={textStyle}>{this.props.address}</Text>

    </CardSection>
    <CardSection style={cardSectionStyle}>
    <Text style={textStyleHeading}>Strategy :-</Text>
    <Text style={textStyle}>{this.decodeStrategy(this.props.strategy)}</Text>

    </CardSection>

    <CardSection style={[cardSectionStyle, { backgroundColor: '#f8f8ff' }]}>
      <Text style={[textStyleHeading, { textAlign: 'center' }]}>Result :-</Text>

    </CardSection>

    <CardSection style={[cardSectionStyle, { backgroundColor: '#f8f8ff' }]}>
    {this.renderResult()}
    </CardSection>
    <CustomModal
    showModal={this.props.showModal}
    modalMessage={this.props.modalMessage}
    />

    </Card>
  );
  }
}

const styles = {
   cardSectionStyle: {
     backgroundColor: '#e3a10faa',
     marginBottom: 4,
     borderBottomWidth: 0,
     justifyContent: 'center',
   },
   textStyle: {
     flex: 2,
     color: '#000',
     fontSize: 18,
   },
   viewStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 4,
      marginTop: 4
   },
   textStyleHeading: {
     flex: 1,
     color: '#000',
     fontSize: 20,
     fontWeight: 'bold'
   },
   cardStyle: {
     backgroundColor: '#f1bf8e',
     borderWidth: 0,
     marginTop: 1,
     marginLeft: 0,
     marginRight: 0,
      flex: 1,
      justifyContent: 'flex-start'
    }
 };
 const mapStateToProps = ({ capture, modal }) => {
   const { name, age, address, strategy, sex, result, uid } = capture;
   const { showModal, modalMessage } = modal;
   return { name, age, address, strategy, sex, result, uid, showModal, modalMessage };
 };

export default connect(mapStateToProps, { addResult, cancelPatient })(FinalReport);
