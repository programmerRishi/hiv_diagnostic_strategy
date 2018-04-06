import {
  PATIENT_FETCH_MODAL_SHOW,
  PATIENT_FETCH_MODAL_HIDE
}
from '../actions/types';

const INITIAL_STATE = { showModal: false, modalMessage: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PATIENT_FETCH_MODAL_SHOW:
      return { ...INITIAL_STATE, showModal: true, modalMessage: 'Fetching Patient List' };
    case PATIENT_FETCH_MODAL_HIDE:
      return { ...INITIAL_STATE };
    default:
      return INITIAL_STATE;
  }
};
