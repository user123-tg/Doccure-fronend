import React from 'react';
import PropTypes from 'prop-types';
const TableHeadItem = ({ item }) => {
  return <th title={item}>{item}</th>;
};
TableHeadItem.prototype = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]).isRequired
};
export default TableHeadItem;
