import {
  PATIENT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

const PatientListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PATIENT_FETCH_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default PatientListReducer;
