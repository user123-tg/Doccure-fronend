import React from 'react';
import PropTypes from 'prop-types';
import './features.scss';
//slider
import Slider from 'react-slick';
export const HomeFeatures = (props) => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerPadding: '10px',
    arrows: false,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
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
    <section className="section section-features">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 features-img">
            <img
              src={require('../../../assets/images/feature.png')}
              className="img-fluid"
              alt="Feature"
            />
          </div>
          <div className="col-md-7">
            <div className="section-header">
              <h2 className="mt-2">Availabe Features in Our Clinic</h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.{' '}
              </p>
            </div>
            <div className="features-slider slider">
              <Slider {...settings} {...props}>
                <div>
                  <div className="feature-item text-center">
                    <img
                      src={require('../../../assets/images/feature-01.jpg')}
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Patient Ward</p>
                  </div>
                </div>
                <div>
                  <div className="feature-item text-center">
                    <img
                      src={require('../../../assets/images/feature-02.jpg')}
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Test Room</p>
                  </div>
                </div>
                <div>
                  <div className="feature-item text-center">
                    <img
                      src={require('../../../assets/images/feature-03.jpg')}
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>ICU</p>
                  </div>
                </div>
                <div>
                  <div className="feature-item text-center">
                    <img
                      src={require('../../../assets/images/feature-04.jpg')}
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Laboratory</p>
                  </div>
                </div>
                <div>
                  <div className="feature-item text-center">
                    <img
                      src={require('../../../assets/images/feature-05.jpg')}
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Operation</p>
                  </div>
                </div>
                <div>
                  <div className="feature-item text-center">
                    <img
                      src={require('../../../assets/images/feature-06.jpg')}
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Medical</p>
                  </div>
                </div>

                <div>
                  <div className="feature-item text-center">
                    <img
                      src={require('../../../assets/images/feature-06.jpg')}
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Patient Ward</p>
                  </div>
                </div>
                <div>
                  <div className="feature-item text-center">
                    <img
                      src={require('../../../assets/images/feature-06.jpg')}
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Test Room</p>
                  </div>
                </div>
                <div>
                  <div className="feature-item text-center">
                    <img
                      src={require('../../../assets/images/feature-06.jpg')}
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>ICU</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeFeatures;
HomeFeatures.prototypes = {
  props: PropTypes.any
};
