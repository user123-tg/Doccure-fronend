// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// export const navigateTo = (role) => {
//   if (role === '61e8eff6808beaa8291fd4e2') {
//     // redirect to doctor dashboard if its doctor
//     navigate('/doctor/dashboard');
//   } else if (role === '61ea587929e90b4b961335dd') {
//     // redirect to patient dashboard if its patient
//     navigate('/patient/dashboard');
//   }
// };

// I will be requiring this in the future.
import jwt_decode from 'jwt-decode';

export const setAccessToken = (data) => {
  const decode1 = jwt_decode(data);
  console.log(decode1, 'decode');
  let { roleid } = decode1.payload;
  console.log(roleid.name, data, 'token..');

  localStorage.setItem('user', JSON.stringify({ roleName: roleid.name, accessToken: data }));
};
