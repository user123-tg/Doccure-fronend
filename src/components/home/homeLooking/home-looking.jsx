import React from 'react';
import LookingCard from './LookingCard.jsx';
import PropTypes from 'prop-types';
const homeLooking = (props) => {
  const detail = [
    {
      cardTitle: 'Visit a Doctor',
      buttonText: 'Book Now'
    },
    {
      cardTitle: 'Find a Pharmacy',
      buttonText: 'Find Now'
    },
    {
      cardTitle: 'Find a Lab',
      buttonText: 'Coming Soon'
    }
  ];
  return (
    <>
      <section className="section home-tile-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 m-auto">
              <div className="section-header text-center">
                <h2>What are you looking for?</h2>
              </div>
              <div className="row">
                <LookingCard detail={detail} {...props} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default homeLooking;

homeLooking.propTypes = {
  props: PropTypes.any
};
