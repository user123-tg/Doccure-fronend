import React from 'react';
import Layout from '../../layouts/layout';
import PatientNavbar from '../../components/Patient/favourites/PatientNavbar';
import PatientSidebar from '../../components/Patient/PatientSidebar';
import { Link } from 'react-router-dom';

const navbarLinks = [
  {
    link: '/home',
    name: 'Home'
  },
  {
    name: 'Add Billing',
    link: '/doctor/add-billing'
  }
];

const AddBilling = () => {
  return (
    <Layout>
      <PatientNavbar items={navbarLinks} title="Add Billing" />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
              <PatientSidebar />
            </div>
            {/*
              --Starts
            */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Add Billing</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="biller-info">
                        <h4 className="d-block">Dr. Darren Elder</h4>
                        <span className="d-block text-sm text-muted">Dentist</span>
                        <span className="d-block text-sm text-muted">Newyork, United States</span>
                      </div>
                    </div>
                    <div className="col-sm-6 text-sm-right">
                      <div className="billing-info">
                        <h4 className="d-block">1 November 2019</h4>
                        <span className="d-block text-muted">#INV0001</span>
                      </div>
                    </div>
                  </div>

                  <div className="add-more-item text-right">
                    <a href="#0">
                      <i className="fas fa-plus-circle"></i> Add Item
                    </a>
                  </div>

                  <div className="card card-table">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center">
                          <thead>
                            <tr>
                              <th style={{ width: '200px' }}>Title</th>
                              <th style={{ width: '200px' }}>Amount</th>
                              <th style={{ width: '200px' }}></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <Link to="#0" className="btn bg-danger-light trash">
                                  <i className="far fa-trash-alt"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <Link to="#0" className="btn bg-danger-light trash">
                                  <i className="far fa-trash-alt"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 text-right">
                      <div className="signature-wrap">
                        <div className="signature">Click here to sign</div>
                        <div className="sign-name">
                          <p className="mb-0">( Dr. Darren Elder )</p>
                          <span className="text-muted">Signature</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="submit-section">
                        <button type="submit" className="btn btn-primary submit-btn">
                          Save
                        </button>
                        <button type="reset" className="btn btn-secondary submit-btn">
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*
              --Ends
            */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddBilling;
