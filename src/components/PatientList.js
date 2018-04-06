import React, { Component } from 'react';
import { Button, View, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { Card, CustomModal } from './common';
import PatientListStack from './PatientListStack';
import { signOut } from '../actions/LoginActions';

class PatientList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'PatientList',

    headerStyle: {
      backgroundColor: '#e67e22dd',
    },

    headerTitleStyle: {
      fontSize: 30,
      fontFamily: 'JosefinSans-Thin',
      color: '#ecf0f1ff',
      textAlign: 'center',
      flexGrow: 1,
    },

    headerRight: (
    <View style={{ paddingRight: 3 }}>
    <Button
    title="Add"
    color='#800000'
    // textstyle={{ paddinTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 }}
    // extraButtonStyle={{ marginTop: 5, marginBottom: 5 }}
    onPress={() => navigation.navigate('newPatient')}
    >
    New Patient
    </Button>
    </View>
  ),

    headerLeft: (
    <View style={{ paddingLeft: 3 }}>
    <Button
    title="LogOut"
    color='#800000'
    // textstyle={{ paddinTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 }}
    // extraButtonStyle={{ marginTop: 5, marginBottom: 5 }}
    onPress={() => {
      navigation.state.params.signOut({ navigation });
    }
  }
    >
    New Patient
    </Button>
    </View>
    )
  }
);

state = { showModal: false, modalMessage: '' };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
    });

    this.props.navigation.setParams(
      {
      signOut: this.props.signOut
      }
  );
  }

render() {
      const { cardStyle } = styles;
      const { navigation } = this.props;
  return (
    <Card style={cardStyle}>
    <PatientListStack
    navigation={navigation}
    classObjectPatientList={this}
    />
    <CustomModal
    modalMessage={this.state.modalMessage}
    showModal={this.state.showModal}
    />

    </Card>
  );
}
}

const styles = {
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


export default connect(null, { signOut })(PatientList);
