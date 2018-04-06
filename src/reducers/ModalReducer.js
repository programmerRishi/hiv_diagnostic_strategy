import {
  MODAL_SHOW,
  MODAL_HIDE,
  PATIENT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { modalMessage: '', showModal: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return { ...INITIAL_STATE, modalMessage: action.payload, showModal: true };
    case MODAL_HIDE:
      return INITIAL_STATE;
    case PATIENT_FETCH_SUCCESS:
      return state;
    default:
      return { ...INITIAL_STATE, itIsDefault: 'itIsDefault ' };
  }
};
