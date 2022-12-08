import axiosInstance from '../apibase';
//import { useNavigate } from 'react-router-dom';
import apiEndPoints from './endPoints';

const { changePass } = apiEndPoints.patient;
//const navigate = useNavigate();
export const changePassword = (formData, setLoading, setError, token) => {
  setLoading(true);
  setError(false);
  axiosInstance
    .patch(changePass, formData, token)
    .then(() => {
      setLoading(false);
      localStorage.removeItem('token');
      // navigate('/template/login');
    })
    .catch((err) => {
      if (err) {
        setError('Please provide the correct password');
        setLoading(false);
        console.log('An error has occured');
      }
    });
};
