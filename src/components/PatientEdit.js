import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {

  static navigationOptions = () => (
  {
  headerTitle: 'Edit Employee',
  }
 );

state = { showModal: false };

 componentWillMount() {
   _.each(this.props.navigation.state.params.employee, (value, prop) => {
     this.props.employeeUpdate({ prop, value });
   });
 }

 onButtonPress() {
   const { name, phone, shift, uid, navigation } = this.props;
   this.props.employeeSave({ name, phone, shift, uid, navigation });
 }
 onTextPress() {
  const { phone, shift } = this.props;
  Communications.text(phone, `Your upcoming shift is on ${shift}`);
 }
 onAccept() {
 const { uid, navigation } = this.props;
 this.props.employeeDelete({ uid, navigation });
 this.setState({ showModal: false });
 }
onDecline() {
  this.setState({ showModal: false });
}
  render() {
    return (
      <Card>

        <EmployeeForm />

        <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
        Save Changes
        </Button>
        </CardSection>

        <CardSection>
        <Button onPress={this.onTextPress.bind(this)}>
        Text Schedule
        </Button>
        </CardSection>

        <CardSection>
        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
        Fire Employee
        </Button>
        </CardSection>

        <Confirm
        visible={this.state.showModal}
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}
        >
        Are you sure you want to delete this?
        </Confirm>

      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift, uid } = state.employeeForm;
  console.log(state.employeeForm);
  return { name, phone, shift, uid };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
