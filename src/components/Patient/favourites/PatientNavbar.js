import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PatientNavbar = ({ items, title }) => {
  return (
    <div className="breadcrumb-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                {items.map((item, index) => {
                  return (
                    <li className="breadcrumb-item" key={index}>
                      <Link to={item.link ? item.link : '/home'}>{item.name}</Link>
                    </li>
                  );
                })}
              </ol>
            </nav>
            <h2 className="breadcrumb-title">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

PatientNavbar.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string
};

export default PatientNavbar;
