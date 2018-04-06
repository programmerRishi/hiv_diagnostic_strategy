import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { patientFetch } from '../actions/PatientActions';
import PatientListItem from './PatientListItem';


class PatientListStack extends Component {

  componentWillMount() {
    const { classObjectPatientList } = this.props;
    this.props.patientFetch({ classObjectPatientList });
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ patients }) {
    this.dataSource = patients;
  }
  renderItem({ item }) {
  const { navigation } = this.props;
    return (
            <PatientListItem
            data={item}
            navigation={navigation}
            />
          );
  }
  render() {
    return (
      <View>
      <FlatList
      data={this.dataSource}
      renderItem={this.renderItem.bind(this)}
      keyExtractor={(item) => item.uid}// item is each patient data in the form of object
      // uid id patient uid
      />
      </View>

    );
  }
}
console.log(_.map);
const mapStateToProps = (state) => {
  const { patientList } = state;
  console.log(patientList);
  const patients = _.map(patientList, (val, uid) => {
    return { ...val, uid };
  });
  return { patients };
};

export default connect(mapStateToProps, { patientFetch })(PatientListStack);
