import React from 'react';
import { BookingSummarySideCard } from '../../../components/Patient/checkout/BookingSummarySideCard';
import Layout from '../../../layouts/layout';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <Layout>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="card">
                <div className="card-body">
                  <form action="/patient/booking-success">
                    <div className="info-widget">
                      <h4 className="card-title">Personal Information</h4>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>First Name</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Last Name</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Email</label>
                            <input className="form-control" type="email" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Phone</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="exist-customer">
                        Existing Customer?
                        <Link to="/patient/checkout">Click here to login</Link>
                      </div>
                    </div>

                    <div className="payment-widget">
                      <h4 className="card-title">Payment Method</h4>

                      <div className="payment-list">
                        <label className="payment-radio credit-card-option">
                          <input type="radio" name="radio" defaultChecked />
                          <span className="checkmark"></span>
                          Credit card
                        </label>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group card-label">
                              <label htmlFor="card_name">Name on Card</label>
                              <input className="form-control" id="card_name" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group card-label">
                              <label htmlFor="card_number">Card Number</label>
                              <input
                                className="form-control"
                                id="card_number"
                                placeholder="1234  5678  9876  5432"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_month">Expiry Month</label>
                              <input
                                className="form-control"
                                id="expiry_month"
                                placeholder="MM"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_year">Expiry Year</label>
                              <input
                                className="form-control"
                                id="expiry_year"
                                placeholder="YY"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="cvv">CVV</label>
                              <input className="form-control" id="cvv" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="payment-list">
                        <label className="payment-radio paypal-option">
                          <input type="radio" name="radio" />
                          <span className="checkmark"></span>
                          Paypal
                        </label>
                      </div>

                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept" />
                          <label htmlFor="terms_accept">
                            I have read and accept <a href="#0">Terms &amp; Conditions</a>
                          </label>
                        </div>
                      </div>

                      <div className="submit-section mt-4">
                        <button type="submit" className="btn btn-primary submit-btn">
                          Confirm and Pay
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <BookingSummarySideCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
