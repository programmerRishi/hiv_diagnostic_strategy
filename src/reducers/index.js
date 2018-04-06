import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import SignUpReducer from './SignUpReducer';
import PatientReducer from './PatientReducer';
import PatientListReducer from './PatientListReducer';
import ModalReducer from './ModalReducer';
import CapturePatientPropsDataReducer from './CapturePatientPropsDataReducer';

export default combineReducers({
  logIn: LoginReducer,
  signUp: SignUpReducer,
  patient: PatientReducer,
  patientList: PatientListReducer,
  modal: ModalReducer,
  capture: CapturePatientPropsDataReducer,
});
