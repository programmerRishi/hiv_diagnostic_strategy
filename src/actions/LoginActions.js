import firebase from 'firebase';
import {
  LOGIN_UPDATE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  RESET_LOGIN,
  MODAL_SHOW,
  MODAL_HIDE
} from './types';

export const loginUpdate = ({ prop, value }) => {
  return {
     type: LOGIN_UPDATE,
     payload: { prop, value }
   };
};

export const resetLogin = () => {
  return {
    type: RESET_LOGIN
  };
};

export const signOut = ({ navigation }) => {
  return (dispatch) => {
    dispatch({ type: MODAL_SHOW, payload: 'Logging Out' });
    firebase.auth().signOut()
    .then(() => {
      // compiler doesn't wait for the setTimeout to complete it moves to the next statement

      dispatch({ type: MODAL_HIDE });
      navigation.navigate('logIn');
    });
  };
};

export const loginLab = (email, password, navigation) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: LOGIN_USER_SUCCESS });
      navigation.navigate('listScreen');
      console.log('success');
    })
    .catch(() => {
      dispatch({ type: LOGIN_USER_FAILED, payload: 'AUTHENTICATION FAILED!' });
    });
  };
};
