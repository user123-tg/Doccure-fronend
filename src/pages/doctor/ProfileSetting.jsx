import React, { useState } from 'react';
import DoctorSidebar from '../../components/doctor/doctorSlider';
import ReactTagsInput from '../../components/doctor/profileSetting/ReactTagsInput';
import Education from '../../components/doctor/profileSetting/Education';
import Experience from '../../components/doctor/profileSetting/Experience';
import Award from '../../components/doctor/profileSetting/Award';
import Memberships from '../../components/doctor/profileSetting/Memberships';
import Registration from '../../components/doctor/profileSetting/Registration';
import { DropzoneArea } from 'material-ui-dropzone';
import Submit from '../../themes/submit';
import Input from '../../themes/input.jsx';
import Layout from '../../layouts/layout';
import './profileSetting.scss';
const ProfileSetting = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (files) => {
    setFiles(files);
  };
  console.log(files);
  console.log(handleChange);

  return (
    <Layout>
      <div className="profile-setting">
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
                      Profile Settings
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Profile Settings</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <DoctorSidebar />
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Basic Information</h4>
                    <div className="row form-row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img
                                src={require('../../assets/images/doctor-thumb-02.jpg')}
                                alt="User"
                              />
                            </div>
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload"></i> Upload Photo
                                </span>
                                <Input
                                  type="file"
                                  className="upload"
                                  name="file"
                                  id="file"
                                  placeholder=""
                                />
                              </div>
                              <small className="form-text text-muted">
                                Allowed JPG, GIF or PNG. Max size of 2MB
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Username <span className="text-danger">*</span>
                          </label>
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            className="form-control"
                            placeholder=""
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Email <span className="text-danger">*</span>
                          </label>
                          <Input
                            name="city"
                            id="city"
                            type="email"
                            className="form-control"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            First Name <span className="text-danger">*</span>
                          </label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Gender</label>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-0">
                          <label>Date of Birth</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">About Me</h4>
                    <div className="form-group mb-0">
                      <label>Biography</label>
                      <textarea className="form-control" rows="5"></textarea>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Clinic Info</h4>
                    <div className="row form-row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Clinic Name</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Clinic Address</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Clinic Images</label>
                          <div>
                            <DropzoneArea onChange={handleChange} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card contact-card">
                  <div className="card-body">
                    <h4 className="card-title">Contact Details</h4>
                    <div className="row form-row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Address Line 1</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Address Line 2</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">City</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">State / Province</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Country</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Postal Code</label>
                          <Input name="city" id="city" type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Pricing</h4>

                    <div className="form-group mb-0">
                      <div id="pricing_select">
                        <div className="custom-control custom-radio custom-control-inline">
                          <Input
                            type="radio"
                            id="price_free"
                            name="rating_option"
                            className="custom-control-input"
                            defaultValue="price_free"
                            defaultChecked
                          />
                          <label className="custom-control-label" htmlFor="price_free">
                            Free
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <Input
                            type="radio"
                            id="price_custom"
                            name="rating_option"
                            defaultValue="custom_price"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" htmlFor="price_custom">
                            Custom Price (per hour)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row custom_price_cont"
                      id="custom_price_cont"
                      style={{ display: 'none' }}>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          className="form-control"
                          id="custom_rating_input"
                          name="custom_rating_count"
                          defaultValue=""
                          placeholder="20"
                        />
                        <small className="form-text text-muted">Custom price you can add</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card services-card">
                  <div className="card-body">
                    <h4 className="card-title">Services and Specialization</h4>
                    <div className="form-group">
                      <label>Services</label>
                      <ReactTagsInput key="tag1" />
                    </div>
                    <div className="form-group mb-0">
                      <label>Specialization </label>
                      <ReactTagsInput key="tag2" />
                      <small className="form-text text-muted">
                        Note : Type & Press enter to add new specialization
                      </small>
                    </div>
                  </div>
                </div>

                <Education />
                <Experience />
                <Award />
                <Memberships />
                <Registration />

                <div className="submit-section submit-btn-bottom">
                  <Submit
                    type="submit"
                    name="Save Changes"
                    id="submit"
                    className="btn btn-primary submit-btn">
                    Save Changes
                  </Submit>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileSetting;
