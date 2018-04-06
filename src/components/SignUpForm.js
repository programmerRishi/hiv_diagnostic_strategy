import React, { Component } from 'react';
import {
  ImageBackground,
  Button,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Input, CardSection, Card, ButtonNew, Spinner } from './common';
import { signupUpdate, registerLab, cancelRegister } from '../actions/SignUpActions';

class LoginForm extends Component {
  static navigationOptions = ({ navigation }) => (
    {
      headerTitle: 'Register Lab',
      headerStyle: {
        backgroundColor: '#3D8EB9',
      },
      headerTitleStyle: {
        fontSize: 25,
        fontFamily: 'JosefinSans-Thin',
        color: '#fff',
        textAlign: 'center',
        flexGrow: 1
      },
      headerLeft: (
        <View style={{ paddingLeft: 3 }}>
          <Button
          title="Cancel"
          color='#3b5998'
          onPress={() => {
            navigation.state.params.cancelRegister();
            navigation.navigate('logIn');
          }}
          />
        </View>
    )
  }
    );

    componentDidMount() {
      // this part of the code is used to pass props of the component to navigationOptions
      // these props can be accessed by navigation.state.params
      this.props.navigation.setParams(
        {
          cancelRegister: this.props.cancelRegister
        }
      );
    }

    onLoading() {
      const { loading } = this.props;
      if (loading) {
        return <Spinner color='#007aff' />;
      }
      return (
        <ButtonNew
        onPress={this.onButtonPress.bind(this)}
        >
        Register
        </ButtonNew>
      );
    }
    onButtonPress() {
      const { email, password, navigation, address, labName } = this.props;
      console.log('button pressed');
      this.props.registerLab(email, password, labName, address, navigation);
      Keyboard.dismiss();
    }

render() {
  const { height, width } = Dimensions.get('window');
  return (
    <TouchableOpacity
    onPress={() => Keyboard.dismiss()}
    activeOpacity={1}// 0 value results in complete opacity while 1 makes a transparent touch
    >
    <ImageBackground
    source={require('./sign-up-background.jpg')}
    style={{ width: 412, height: 660, flexDirection: 'column' }}
    >
    <KeyboardAvoidingView
    style={{ width, height }}
    behavior='padding'
    >
    <Card
     style={{
         flex: 1,
         borderWidth: 0,
         marginLeft: 10,
         marginRight: 10,
         elevation: 3,
         justifyContent: 'center'
        }}
    >

    <Text style={styles.errorTextStyle}>{this.props.error}</Text>

    <CardSection>
    <Input
     autoFocus
     label='Lab Name'
     placeholder='Rishi Diagnostic Centre'
     onChangeText={lab => this.props.signupUpdate({ prop: 'labName', value: lab })}
     value={this.props.labName}
     onSubmitEditing={() => { this.addressFocus.focus(); }}
    />
    </CardSection>
    <CardSection>
    <Input
     inputID={(address) => (this.addressFocus = address)}// inputID doesn't have a special name
     label='Address'
     placeholder='Shiv Mandir Road, Bhatparrani'
     onChangeText={address => this.props.signupUpdate({ prop: 'address', value: address })}
     value={this.props.address}
     onSubmitEditing={() => { this.emailFocus.focus(); }}
    />
    </CardSection>
    <CardSection>
    <Input
     inputID={(email) => (this.emailFocus = email)}
     label='Email'
     placeholder='example@example.com'
     onChangeText={email => this.props.signupUpdate({ prop: 'email', value: email })}
     value={this.props.email}
     onSubmitEditing={() => { this.passwordFocus.focus(); }}
    />
    </CardSection>
    <CardSection>
    <Input
     inputID={(password) => (this.passwordFocus = password)}
     label='Password'
     placeholder='password'
     onChangeText={password => this.props.signupUpdate({ prop: 'password', value: password })}
     value={this.props.password}
     secureTextEntry
    />
    </CardSection>
    <CardSection>
    {this.onLoading()}
    </CardSection>
    </Card>
    </KeyboardAvoidingView>
    </ImageBackground>
    </TouchableOpacity>

  );
}
}

const styles = {
  errorTextStyle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'red',
    fontFamily: 'JosefinSans-Bold'
  }
};

const mapStateToProps = ({ signUp }) => {
  const { email, password, loading, address, labName, error } = signUp;
  return { email, password, loading, address, labName, error };
};

export default connect(mapStateToProps,
  { cancelRegister,
    signupUpdate,
      registerLab
    })(LoginForm);
