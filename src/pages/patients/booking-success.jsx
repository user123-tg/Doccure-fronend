import React from 'react';
import PropTypes from 'prop-types';
const bookingSucc = () => {
  return <h3>Booked successfully!</h3>;
};
bookingSucc.prototype = {
  data: PropTypes.object.isRequired
};
export default bookingSucc;
