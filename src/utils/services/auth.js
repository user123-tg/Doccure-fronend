import axiosInstance from '../apibase';
// import history from '../history';
import apiEndPoints from './endPoints';
import Messages from '../language/en/en.json';

const {
  appointmentgetbyid,
  appointmentdelete,
  appointmentuser,
  patientRegister,
  verifyToken,
  userLogin,
  forgotpassword,
  googleRegister,
  googleLogin,
  prescription
} = apiEndPoints.auth;
const { userExist, tokenExpired, somethingWrong } = Messages.apiServicesMsg;

export const registerPatient = async (data) => {
  // setLoading(true);
  // setError(false);
  try {
    const response = await axiosInstance.post(patientRegister, data);
    console.log('ress', response);
    return response;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axiosInstance.post(userLogin, formData);
    return response;
  } catch (error) {
    return error;
  }
};

export const verifyUSerToken = async (token) => {
  try {
    const response = await axiosInstance.get(verifyToken + token);
    return response;
  } catch (error) {
    return error;
  }
};
export const appointment = async () => {
  try {
    const response = await axiosInstance.get(appointmentuser);
    return response;
  } catch (error) {
    return error;
  }
};
export const appointment_delete = async () => {
  try {
    const response = await axiosInstance.delete(appointmentdelete);
    return response;
  } catch (error) {
    return error;
  }
};
export const appointment_getById = async () => {
  try {
    const response = await axiosInstance.get(appointmentgetbyid);
    return response;
  } catch (error) {
    return error;
  }
};
export const prescription_getById = async () => {
  try {
    const response = await axiosInstance.get(prescription);
    return response;
  } catch (error) {
    return error;
  }
};

export const forgotPassword = async (email) => {
  // setError(false);
  // setLoading(true);
  const response = await axiosInstance.post(forgotpassword, email);
  console.log(tokenExpired);
  return response;
};

export const logout = () => {
  localStorage.removeItem('token');
  // axiosInstance
  //   .post(logout)
  //   .then(() => {
  //     localStorage.removeItem('token');
  //     history.push('/');
  //   })
  //   .catch((err) => {
  //     console.log(somethingWrong);
  //     console.log(err);
  //   });
};

export const registerGoogle = (id, gtoken, role, setLoading, setError) => {
  setError(false);
  setLoading(true);
  axiosInstance
    .post(googleRegister, { googleId: id, token: gtoken, role })
    .then((res) => {
      setLoading(false);
      let { token, refreshToken } = res.data;
      localStorage.setItem('token', JSON.stringify({ token, role, refreshToken }));
      if (role === 'doctor') {
        history.push('template/doctor/doctor-dashboard');
      } else if (role === 'patient') {
        history.push('template/patient/dashboard');
      }
    })
    .catch((err) => {
      setLoading(false);
      setError(userExist);
      console.log(err, err.message);
    });
};

export const loginGoogle = (email, googleId, setLoading, setError) => {
  setLoading(true);
  setLoading(false);
  axiosInstance
    .post(googleLogin, { email, googleId })
    .then((res) => {
      setLoading(false);
      let { token, role, refreshToken } = res.data;
      localStorage.setItem('token', JSON.stringify({ token, role, refreshToken }));
      if (role === 'doctor') {
        history.push('template/doctor/doctor-dashboard');
      } else if (role === 'patient') {
        history.push('template/patient/dashboard');
      }
    })
    .catch((err) => {
      console.log(err);
      setError(somethingWrong);
      setLoading(false);
    });
};
