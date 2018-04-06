import {
  PATIENT_UPDATE,
  ADD_PATIENT,
  ADD_PATIENT_SUCCESS,
  CANCEL_PATIENT,
  ERROR_INPUTFIELD_BLANK
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  address: '',
  age: '',
  strategy: '',
  sex: '',
  blankFieldError: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // square brackets used here are key interpretation
    // for further details Go to 'Key interpretation using square brackets' in Documents
    case PATIENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value, blankFieldError: '' };
    case ADD_PATIENT:
       return { ...INITIAL_STATE, loading: true };
    case ADD_PATIENT_SUCCESS:
        return { ...INITIAL_STATE };
    case ERROR_INPUTFIELD_BLANK:
       return { ...state, blankFieldError: 'SOME FIELDS ARE EMPTY!' };
    case CANCEL_PATIENT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
