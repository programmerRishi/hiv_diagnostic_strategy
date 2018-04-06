import React, { Component } from 'react';
import {
  View,
  Picker,
  Text,
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Input, ButtonNew, Spinner } from './common';
import { patientUpdate, cancelPatient, addPatient } from '../actions/PatientActions';

class PatientForm extends Component {
  static navigationOptions = (props) => (
    { // props passed in her has the following configuration:-
      //{navigation: {…}, screenProps: {…}, navigationOptions: {…}}
      headerTitle: 'New Patient Entry',
      headerStyle: {
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

componentDidMount() {
  // this part of the code is used to pass props of the component to navigationOptions
  // these props can be accessed by navigation.state.params

  // BackHandler.addEventListener('hardwareBackPress', () => {
  //   BackHandler.exitApp();
  // });

  this.props.navigation.setParams(
    {
      cancelPatient: this.props.cancelPatient
    }
  );
}

onAddRecordButtonPress() {
  const { name, age, sex, address, strategy, navigation } = this.props;
  this.props.addPatient({ name, age, sex, address, strategy, navigation });
  Keyboard.dismiss();
}

onLoading() {
  const { loading } = this.props;
  if (loading) {
    return <Spinner color='#800000' />;
  }
  return (
    <ButtonNew
    extraButtonStyle={{ borderColor: '#e67e22dd' }}
    textStyle={{ color: '#e67e22dd' }}
    onPress={this.onAddRecordButtonPress.bind(this)}
    >
    Add Record
    </ButtonNew>
  );
}

  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View
      style={{ flex: 1, backgroundColor: '#f1bf8e' }}
      >
      <KeyboardAvoidingView
      style={{ width, height }}
      behavior='padding'
      >
      <Card style={styles.cardStyle}>

      <Text style={styles.blankFieldErrorTextStyle}>{this.props.blankFieldError}</Text>

      <View style={styles.cardSectionContainerStyle}>

      <CardSection>
      <Input
      autoFocus
      label='Name'
      placeholder='Rishi'
      onChangeText={name => this.props.patientUpdate({ prop: 'name', value: name })}
      value={this.props.name}
      onSubmitEditing={() => this.addressFocus.focus()}
      />
      </CardSection>

      <CardSection>
      <Input
      inputID={(address) => (this.addressFocus = address)}
      label='Address'
      placeholder='Deoria'
      onChangeText={address => this.props.patientUpdate({ prop: 'address', value: address })}
      value={this.props.address}
      onSubmitEditing={() => this.ageFocus.focus()}
      />
      </CardSection>

      <CardSection>
      <Input
      inputID={(age) => (this.ageFocus = age)}
      keyboardType='numeric'
      label='Age'
      placeholder='21'
      onChangeText={age => this.props.patientUpdate({ prop: 'age', value: age })}
      value={this.props.age}
      onSubmitEditing={() => Keyboard.dismiss()}
      />
      </CardSection>

      <CardSection>
      <Text style={styles.labelStyle}>Sex</Text>
      <Picker
      selectedValue={this.props.sex}
      onValueChange={(itemValue) => {
        this.props.patientUpdate({ prop: 'sex', value: itemValue });
        Keyboard.dismiss();
      }}
      mode='dialog'
      style={styles.pickerStyle}
      >
      <Picker.Item label='Select' value='' />
      <Picker.Item label='MALE' value='M' />
      <Picker.Item label='FEMALE' value='F' />
      <Picker.Item label='OTHERS' value='O' />
      </Picker>
      </CardSection>


    <CardSection>
      <Text style={styles.labelStyle}>Strategy</Text>
      <Picker
      selectedValue={this.props.strategy}
      onValueChange={
          (itemValue) => {
            this.props.patientUpdate({ prop: 'strategy', value: itemValue });
          Keyboard.dismiss();
              }
                    }
      mode='dropdown'
      style={styles.pickerStyle}
      >
      <Picker.Item label='Select' value='' />
      <Picker.Item label='STRATEGY I' value='1' />
      <Picker.Item label='STRATEGY IIa' value='2' />
      <Picker.Item label='STRATEGY IIb' value='3' />
      <Picker.Item label='STRATEGY III' value='4' />
      </Picker>
      </CardSection>

      <CardSection>
      {this.onLoading()}
      </CardSection>

      </View>

      </Card>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = {
  cardStyle: {
      flex: 1,
      backgroundColor: '#f1bf8e',
      borderWidth: 0,
      elevation: 6,
      paddingLeft: 2,
      paddingRight: 2,
      marginLeft: 8,
      marginRight: 8,
      justifyContent: 'center'
    },
    cardSectionContainerStyle:
    {
       paddingLeft: 2,
       paddingRight: 2,
       borderWidth: 0,
       borderRadius: 3,
       elevation: 6,
    },
    pickerStyle: {
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingRight: 5,
      paddingLeft: 5,
      flex: 2
    },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1,
      alignSelf: 'center'
    },
    blankFieldErrorTextStyle: {
      fontSize: 25,
      textAlign: 'center',
      color: 'red',
      fontFamily: 'JosefinSans-Bold'
    }
};

const mapStateToProps = ({ patient }) => {
  const { name, age, address, strategy, sex, blankFieldError, loading } = patient;
  return { name, age, address, strategy, sex, blankFieldError, loading };
};

export default connect(mapStateToProps, { patientUpdate, cancelPatient, addPatient })(PatientForm);
