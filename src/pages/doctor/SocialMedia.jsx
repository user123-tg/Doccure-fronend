import DoctorSidebar from '../../components/doctor/doctorSlider';
import Layout from '../../layouts/layout';
import PropTypes from 'prop-types';
import FormInput from '../../themes/Form/FormInput';
import './socialMedia.scss';
import Submit from '../../themes/submit';
const SocialMedia = (props) => {
  const title = [
    'Facebook URL',
    'Twitter URL',
    'Instagram URL',
    'Pinterest URL',
    'Linkedin URL',
    'Youtube URL'
  ];
  return (
    <Layout>
      <div className="social-media">
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/home">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Social Media
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Social Media</h2>
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <DoctorSidebar {...props} />
              </div>

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <form>
                      {title?.map((e, index) => {
                        return <FormInput key={index} label={e} {...props} />;
                      })}
                      <div className="submit-section">
                        <Submit
                          type="submit"
                          className="btn btn-primary submit-btn"
                          name="Save Changes"
                          id="submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SocialMedia;
SocialMedia.prototype = {
  props: PropTypes.any
};
