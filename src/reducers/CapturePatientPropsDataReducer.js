import {
  ON_CAPTURE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  age: '',
  sex: '',
  address: '',
  strategy: '',
  result: '',
  uid: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_CAPTURE:
      return action.payload;
    default:
      return INITIAL_STATE;
  }
};
