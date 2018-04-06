import firebase from 'firebase';
import {
  SIGNUP_UPDATE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CANCEL_REGISTER,
  ERROR
} from './types';

export const signupUpdate = ({ prop, value }) => {
  return {
     type: SIGNUP_UPDATE,
     payload: { prop, value }
   };
};

export const cancelRegister = () => {
  return {
    type: CANCEL_REGISTER
  };
};


export const registerLab = (email, password, address, labName, navigation) => {
  return (dispatch) => {
    const checkIfEmptyValues = email && password && address && labName;
    if (checkIfEmptyValues) {
      dispatch({ type: CREATE_USER });

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('user created');
        dispatch({ type: CREATE_USER_SUCCESS });
        navigation.navigate('otherScreen');
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ERROR, payload: error.message });
      });

    }

    else {
      console.log('field is empty');
      dispatch({ type: ERROR, payload: 'SOME FIELDS ARE EMPTY!' });
    }
  };
};
