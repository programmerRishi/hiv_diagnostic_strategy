import {
  SIGNUP_UPDATE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CANCEL_REGISTER,
  ERROR } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  address: '',
  labName: '',
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value, blankFieldError: '' };
    case CANCEL_REGISTER:
        return INITIAL_STATE;
    case CREATE_USER:
      return { ...state, loading: true };
    case CREATE_USER_SUCCESS:
      return { ...INITIAL_STATE, loading: false };
    case ERROR:
      return { ...INITIAL_STATE, error: action.payload };
    default:
      return state;
    }
};
