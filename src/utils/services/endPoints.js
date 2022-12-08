const apiEndPoints = {
  auth: {
    verifyToken: '/tokenverify/',
    patientRegister: '/register',
    userLogin: '/login',
    userRegister: '/register',
    forgotpassword: '/forgetpassword/:id ',
    logout: 'user/logout',
    googleRegister: 'user/googleRegister',
    googleLogin: 'user/googleLogin',
    finduserbyid: '/findUserById',
    appointmentuser: '/appointmentuser',
    appointmentdelete: '/appointmentdelete/636c7ee118cc85017d847115',
    appointmentgetbyid: '/gettaskbyid/636c7ee118cc85017d847115',
    userupdate: '/userupdate/634cf70f2cf04029ac08fee5',
    prescription: '/prescreption/findByid/62bbff2c0824db5bc64672bd'
  },
  doctor: {
    changePass: 'doctor/changePassword'
  },
  patient: {
    changePass: 'changepassword/6344fa7614299815e7a0fb61'
  }
};

export default apiEndPoints;
