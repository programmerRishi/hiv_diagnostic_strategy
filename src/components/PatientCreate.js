import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions/EmployeeActions';
import { Card, CardSection, Button } from './common';
import PatientForm from './PatientForm';

class EmployeeCreate extends Component {
  static navigationOptions = () => (
  {
  headerTitle: 'Create Employee',
  }
 );

  render() {
     const { name, phone, shift, navigation } = this.props;
    return (
    <Card>
    <PatientForm {...this.props} />
    <CardSection>
    <Button
    onPress={() => {
    this.props.employeeCreate({ name, shift: shift || 'Monday', phone, navigation });
    }}
    >
    Create
    </Button>
    </CardSection>

    </Card>
    );
  }
}


const mapStateToProps = (state) => {
 const { name, shift, phone } = state.employeeForm;
 console.log(state.employeeForm);
 return { name, shift, phone };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
