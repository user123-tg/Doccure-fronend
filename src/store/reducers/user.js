import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_LOADING,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_ERROR,
  FORGOT_SUCCESS,
  FORGOT_LOADING,
  FORGOT_ERROR,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_lOADING,
  VERIFY_TOKEN_ERROR,
  APPOINTMENT_SUCCESS,
  APPOINTMENT_LOADING,
  APPOINTMENT_ERROR,
  APPOINTMENT_DELETE_ERROR,
  APPOINTMENT_DELETE_LOADING,
  APPOINTMENT_DELETE_SUCCESS,
  APPOINTMENT_GETBYID_ERROR,
  APPOINTMENT_GETBYID_LOADING,
  APPOINTMENT_GETBYID_SUCCESS,
  PRESCRIPTION_GETBYID_ERROR,
  PRESCRIPTION_GETBYID_LOADING,
  PRESCRIPTION_GETBYID_SUCCESS
} from '../CONSTANTS';

const initialState = {
  user: '',
  type: null,
  isLoading: false
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(type, 'payload');
  switch (type) {
    case LOGIN_SUCCESS:
      console.log(JSON.stringify(payload), 'payload.........');
      localStorage.setItem('token', JSON.stringify(payload.accessToken));
      return {
        ...state,
        user: payload,
        type,
        isLoading: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        user: payload,
        type,
        isLoading: false
      };
    case LOGIN_LOADING:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case LOGOUT_SUCCESS:
      return initialState;

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        type,
        isLoading: false
      };
    case REGISTER_ERROR:
      return {
        ...state,
        user: payload,
        type,
        isLoading: false
      };
    case REGISTER_LOADING:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case FORGOT_SUCCESS:
      return {
        ...state,
        user: payload,
        type
      };
    case FORGOT_ERROR:
      return {
        ...state,
        user: payload,
        type
      };
    case FORGOT_LOADING:
      return {
        ...state,
        user: payload,
        type
      };
    case VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        user: payload,
        type
      };
    case VERIFY_TOKEN_lOADING:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case VERIFY_TOKEN_ERROR:
      return {
        ...state,
        user: payload,
        type
      };
    case APPOINTMENT_LOADING:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case APPOINTMENT_SUCCESS:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case APPOINTMENT_ERROR:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case APPOINTMENT_DELETE_LOADING:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case APPOINTMENT_DELETE_SUCCESS:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case APPOINTMENT_DELETE_ERROR:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case APPOINTMENT_GETBYID_LOADING:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case APPOINTMENT_GETBYID_SUCCESS:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case APPOINTMENT_GETBYID_ERROR:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case PRESCRIPTION_GETBYID_LOADING:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case PRESCRIPTION_GETBYID_SUCCESS:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    case PRESCRIPTION_GETBYID_ERROR:
      return {
        ...state,
        user: payload,
        type,
        isLoading: true
      };
    default:
      return state;
  }
};

export default userReducer;
