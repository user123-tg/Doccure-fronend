import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
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
  APPOINTMENT_DELETE_SUCCESS,
  APPOINTMENT_DELETE_LOADING,
  APPOINTMENT_DELETE_ERROR,
  APPOINTMENT_GETBYID_SUCCESS,
  APPOINTMENT_GETBYID_LOADING,
  APPOINTMENT_GETBYID_ERROR,
  PRESCRIPTION_GETBYID_LOADING,
  PRESCRIPTION_GETBYID_SUCCESS,
  PRESCRIPTION_GETBYID_ERROR
} from '../CONSTANTS';
import { toast } from 'react-toastify';

import {
  loginUser,
  verifyUSerToken,
  registerPatient,
  forgotPassword,
  appointment,
  appointment_delete,
  appointment_getById,
  prescription_getById
} from '../../utils/services/auth';
import { setAccessToken } from '../../utils/globalFunction';

export const login = (formData, setLoading, setError, navigate) => async (dispatch) => {
  setLoading(true);
  setError(false);
  dispatch({
    type: LOGIN_LOADING
  });
  const response = await loginUser(formData);
  if (response?.status === 200 || response?.status === 201) {
    setAccessToken(response.data.accessToken);
    console.log('Role', localStorage.getItem('roleName'));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response?.data
    });

    toast.success(response.data.message);
    const role = JSON.parse(localStorage.getItem('user'));

    if (role.roleName == 'patient') {
      navigate('/patient/dashboard');
    } else {
      navigate('/doctor/profile-setting');
    }
    setAccessToken(response?.data);
  } else {
    console.log(response, 'else');
    setLoading(false);
    setError(true);
    dispatch({
      type: LOGIN_ERROR,
      payload: response
    });

    toast.error(response);
  }
};

export const logout = () => async (dispatch) => {
  try {
    return dispatch({
      type: LOGOUT_SUCCESS
    });
  } catch (e) {
    console.error(e.message);
    return e.message;
  }
};
export const verifyToken = (token, navigate) => async (dispatch) => {
  dispatch({
    type: VERIFY_TOKEN_lOADING
  });
  const response = await verifyUSerToken(token);
  console.log(response, 'ooooooo');
  if (response?.data?.status === 200 || response?.data?.status === 201) {
    dispatch({
      type: VERIFY_TOKEN_SUCCESS,
      payload: response?.data
    });

    toast.success(response.data.message);
    // const role = JSON.parse(localStorage.getItem('user'));

    if (response.data.data.rolename.name == 'patient') {
      navigate('/patient/dashboard');
    } else {
      navigate('/doctor/profile-setting');
    }
    setAccessToken(response?.data);
  } else {
    toast.error(response.data.message);
    console.log(response, 'else');

    dispatch({
      type: VERIFY_TOKEN_ERROR,
      payload: response
    });
  }
};

export const register = (formData, setLoading, setError, navigate) => async (dispatch) => {
  setLoading(true);
  setError(false);
  dispatch({
    type: REGISTER_LOADING
  });
  const response = await registerPatient(formData);
  console.log(response, 'test');
  if (response?.status === 200 || response?.status === 201) {
    navigate('/');
    console.log('navigaterfegister', navigate);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response?.data
    });

    toast.success(response.data.message);

    if (formData.rolename == 'patient') {
      navigate('/RegisterRedirect');
    } else {
      navigate('/RegisterRedirect');
    }
  } else {
    setLoading(false);
    setError(true);
    dispatch({
      type: REGISTER_ERROR,
      payload: response
    });
    console.log(response, ';;;;;;;;;;;;');

    toast.error(response);
  }
};

export const Forgot_Password = (formData) => async (dispatch) => {
  dispatch({
    type: FORGOT_LOADING
  });

  const response = await forgotPassword(formData);
  console.log(response, 'test');
  if (response?.status === 200 || response?.status === 201) {
    dispatch({
      type: FORGOT_SUCCESS,
      payload: response?.data
    });
    setAccessToken(response?.data);
  } else {
    dispatch({
      type: FORGOT_ERROR,
      payload: response
    });
  }
};
export const appointment_user = (formData) => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_LOADING
  });
  const response = await appointment(formData);
  if (response?.status === 200 || response?.status === 201) {
    dispatch({
      type: APPOINTMENT_SUCCESS,
      payload: response?.data
    });
    setAccessToken(response?.data);
  } else {
    dispatch({
      type: APPOINTMENT_ERROR,
      payload: response
    });
  }
};
export const appointment_deleteuser = () => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_DELETE_LOADING
  });
  const response = await appointment_delete();
  if (response?.status === 200 || response?.status === 201) {
    dispatch({
      type: APPOINTMENT_DELETE_SUCCESS,
      payload: response?.data
    });
    setAccessToken(response?.data);
  } else {
    dispatch({
      type: APPOINTMENT_DELETE_ERROR,
      payload: response
    });
  }
};
export const appointment_Getbyid = () => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_GETBYID_LOADING
  });
  const response = await appointment_getById();
  if (response?.status === 200 || response?.status === 201) {
    dispatch({
      type: APPOINTMENT_GETBYID_SUCCESS,
      payload: response?.data
    });
    setAccessToken(response?.data);
  } else {
    dispatch({
      type: APPOINTMENT_GETBYID_ERROR,
      payload: response
    });
  }
};
export const prescription_Getbyid = () => async (dispatch) => {
  console.log('working');
  dispatch({
    type: PRESCRIPTION_GETBYID_LOADING
  });
  const response = await prescription_getById();
  console.log(response, 'precription res');
  if (response?.status === 200 || response?.status === 201) {
    dispatch({
      type: PRESCRIPTION_GETBYID_SUCCESS,
      payload: response?.data
    });
    setAccessToken(response?.data);
  } else {
    dispatch({
      type: PRESCRIPTION_GETBYID_ERROR,
      payload: response
    });
  }
};
