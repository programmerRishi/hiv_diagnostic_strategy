import firebase from 'firebase';
import {
  PATIENT_FETCH_SUCCESS,
  PATIENT_UPDATE,
  CANCEL_PATIENT,
  ADD_PATIENT,
  ADD_PATIENT_SUCCESS,
  ERROR_INPUTFIELD_BLANK,
  MODAL_SHOW,
  MODAL_HIDE,
  ON_CAPTURE
} from './types';

export const patientUpdate = ({ prop, value }) => {
  return {
     type: PATIENT_UPDATE,
     payload: { prop, value }
   };
};

export const addPatient = ({ name, age, sex, address, strategy, navigation }) => {
  return (dispatch) => {
    const checkIfEmptyValues = name && age && address && strategy && navigation;
    if (checkIfEmptyValues) {
      dispatch({ type: ADD_PATIENT });
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}/patients`)
      .push({ name, age, sex, address, strategy })
      .then(() => {
        dispatch({ type: ADD_PATIENT_SUCCESS });
        navigation.navigate('listPatient');
      });
    }

    else {
      console.log('field is empty');
      dispatch({ type: ERROR_INPUTFIELD_BLANK });
    }
  };
};

export const cancelPatient = () => {
  return {
    type: CANCEL_PATIENT
  };
};

export const addResult = ({ result, uid, navigation }) => {
      return (dispatch) => {
      dispatch({ type: MODAL_SHOW, payload: 'Updating Result' });
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}/patients/${uid}`)
      .update({ result })
      .then(() => {
        navigation.navigate('listPatient');
        dispatch({ type: MODAL_HIDE });
        }
      );
    };
  };

export const patientFetch = ({ classObjectPatientList }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    classObjectPatientList.setState({ showModal: true, modalMessage: 'Fetching Patient List ' });
    firebase.database().ref(`/users/${currentUser.uid}/patients`)
    // snapshot is the not the actual data or array of data.
    // snapshot is an object which can get us access to the data.
    // for getting the data use .val() method
     .on('value', snapshot => {
       dispatch({ type: PATIENT_FETCH_SUCCESS, payload: snapshot.val() });
       classObjectPatientList.setState({ showModal: false, modalMessage: '' });
     });
  };
  // first argument in .on() method is the event, in this case 'value'
  // for further reference visit -- https://firebase.google.com/docs/database/web/lists-of-data
};

export const capturePatientPropsData = ({ data }) => {
  return (
    {
      type: ON_CAPTURE,
      payload: data
    }
  );
};
