import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import StartPage from './components/StartPage';
import PatientList from './components/PatientList';
import PatientForm from './components/PatientForm';
import FinalReport from './components/FinalReport';

const MainScreen = StackNavigator({
   firstPage: {
     screen: StartPage
   }
});

const LoginScreens = StackNavigator({
  logIn: {
    screen: LoginForm
  },
  signUp: {
    screen: SignUpForm
  },

});

const PatientListScreen = StackNavigator({
  listPatient: {
    screen: PatientList
  },
  newPatient: {
    screen: PatientForm
  },
  finalReport: {
    screen: FinalReport
  }
});

const RouterComponent = StackNavigator({
  main: {
    screen: MainScreen
  },
  otherScreen: {
    screen: LoginScreens
  },
  listScreen: {
    screen: PatientListScreen
  }
        },
        {
          headerMode: 'none'
        }
);

export { RouterComponent };
