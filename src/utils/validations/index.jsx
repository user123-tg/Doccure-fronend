import { number } from 'prop-types';
import Messages from '../language/en/en.json';

const {
  requiredField,

  incorrectPassword,
  incorrectEmail,
  incorrectPhoneNo,
  incorrectaddress,
  incorrectName
} = Messages.validationError;

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return requiredField;
  if (!emailRegex.test(email)) return incorrectEmail;

  return undefined;
};

export const validatePassword = (password) => {
  if (!password) return requiredField;
  if (password.length < 6 || password.length > 50) return incorrectPassword;

  return undefined;
};

export const validatePhoneNo = (phone) => {
  const regx = /^[0-9]*$/;
  if (!phone) {
    return requiredField;
  }
  if (!regx.test(phone)) {
    return incorrectPhoneNo;
  }
  if (phone.length !== 10) return incorrectPhoneNo;
  return undefined;
};
export const validateRole = (role) => {
  if (!role) {
    return requiredField;
  }
  // if (phone.length !== 10) return incorrectPhoneNo;
  return undefined;
};
export const validateGender = (gender) => {
  if (!gender) {
    return requiredField;
  }
  // if (phone.length !== 10) return incorrectPhoneNo;
  return undefined;
};
export const validateaddress = (address) => {
  if (!address) {
    return requiredField;
  }
  if (address == number) {
    return incorrectaddress;
  }
};

export const validateUserLastName = (name) => {
  if (!name) {
    return requiredField;
  }
  if (name.length < 2 || name.length > 30) {
    return incorrectName;
  }
  return undefined;
};
export const validateUserFirstName = (name) => {
  if (!name) {
    return requiredField;
  }

  return undefined;
};

export const validateConfirmPassword = (password, confirm_password) => {
  let error = '';
  if (password && confirm_password) {
    if (password !== confirm_password) {
      error = 'Password not matched';
    }
  }
  return error;
};
