import React, { Component } from 'react';
import {
   Text,
   ImageBackground,
   Dimensions,
   TouchableOpacity,
   Keyboard,
   KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Input, CardSection, Card, ButtonNew, Spinner } from './common';
import { loginUpdate, loginLab, resetLogin } from '../actions/LoginActions';

class LoginForm extends Component {
  static navigationOptions = () => (
    {
      headerTitle: 'Lab Login',
      headerStyle: {
        backgroundColor: '#3D8EB9',
      },
      headerLeft: null,
      headerTitleStyle: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center', //alignSelf not working
        flexGrow: 1, //textAlign is used with flexGrow to align titel in center
      },
    }
        );

  onRegisterButtonPress() {
    const { navigation } = this.props;
    this.props.resetLogin();
    navigation.navigate('signUp');
  }
  onButtonPress() {
    const { email, password, navigation } = this.props;
    console.log('button pressed');
    this.props.loginLab(email, password, navigation);
    Keyboard.dismiss(); // can also be used Keyboard.dismiss ie without curly braces
    // to use without the curly braces use it directly as a value for 'onPress' prop
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
      Log In
      </ButtonNew>
    );
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
    style={{ width, height }}
    >
    <KeyboardAvoidingView
    style={{ width, height }}
    behavior='padding'
    >
    <Card
    style={styles.cardStyle}
    >
    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
    <CardSection>
    <Input
     label='Email'
     placeholder='example@example.com'
     autoFocus
     onChangeText={email => this.props.loginUpdate({ prop: 'email', value: email })}
     value={this.props.email}
     onSubmitEditing={() => { this.passwordFocus.focus(); }}
    />
    </CardSection>
    <CardSection>
    <Input
     inputID={(password) => (this.passwordFocus = password)}// inputID doesn't have a special name
     label='Password'
     placeholder='password'
     onChangeText={password => this.props.loginUpdate({ prop: 'password', value: password })}
     value={this.props.password}
     secureTextEntry
    />
    </CardSection>
    <CardSection>
     {this.onLoading()}
    </CardSection>
    <CardSection />
    <CardSection style={styles.cardSectionStyle}>
    <Text style={styles.textStyle}>
    Have not registered yet?
    </Text>
    <ButtonNew
    onPress={this.onRegisterButtonPress.bind(this)}
    >
    Register
    </ButtonNew>
    </CardSection>
    </Card>
    </KeyboardAvoidingView>
    </ImageBackground>

    </TouchableOpacity>
  );
}
}
const styles = {
  cardStyle: {
      flex: 1,
      borderWidth: 0,
      elevation: 3,
      paddingLeft: 2,
      paddingRight: 2,
      marginLeft: 8,
      marginRight: 8,
      justifyContent: 'center'
    },
  textStyle: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  errorTextStyle: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'red',
    fontFamily: 'JosefinSans-Bold'
  }
};

const mapStateToProps = ({ logIn }) => {
  const { email, password, loading, error } = logIn;
  return { email, password, loading, error };
};

export default connect(mapStateToProps,
  { loginUpdate,
     loginLab,
      resetLogin })(LoginForm);
