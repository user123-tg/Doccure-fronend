import React from 'react';
import PropTypes from 'prop-types';
import './clinic.scss';
import '../../../assets/scss/stick-dot.scss';
import Slider from 'react-slick';

const clinic = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };
  return (
    <>
      <section className="section section-specialities">
        <div className="container-fluid">
          <div className="section-header text-center">
            <h2>Clinic and Specialities</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="specialities-slider slider">
                <Slider {...settings} {...props}>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={require('../../../assets/images/specialities-01.png')}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Urology</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={require('../../../assets/images/specialities-02.png')}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Neurology</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={require('../../../assets/images/specialities-03.png')}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Orthopedic</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={require('../../../assets/images/specialities-04.png')}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Cardiologist</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={require('../../../assets/images/specialities-05.png')}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Dentist</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={require('../../../assets/images/specialities-01.png')}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Urology</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

clinic.propTypes = {
  props: PropTypes.any
};

export default clinic;
