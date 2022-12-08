import { Link } from 'react-router-dom';
import DoctorSidebar from '../../components/doctor/doctorSlider';
import React from 'react';
import MyPatientCard from '../../components/doctor/MyPatientCard';
import Layout from '../../layouts/layout';
const MyPatient = () => {
  const myPatient = [
    {
      patientName: 'Richard Wilson',
      patientId: 'P0016',
      address: 'Alabama, USA',
      p_number: '+1 952 001 8563',
      age: '52',
      gender: 'M',
      bloodGroup: 'A+'
    },
    {
      patientName: 'Richard Wilson',
      patientId: 'P0016',
      address: 'Alabama, USA',
      p_number: '+1 952 001 8563',
      age: '52',
      gender: 'M',
      bloodGroup: 'A+'
    },
    {
      patientName: 'Richard Wilson',
      patientId: 'P0016',
      address: 'Alabama, USA',
      p_number: '+1 952 001 8563',
      age: '52',
      gender: 'M',
      bloodGroup: 'A+'
    },
    {
      patientName: 'Richard Wilson',
      patientId: 'P0016',
      address: 'Alabama, USA',
      p_number: '+1 952 001 8563',
      age: '52',
      gender: 'M',
      bloodGroup: 'A+'
    },
    {
      patientName: 'Richard Wilson',
      patientId: 'P0016',
      address: 'Alabama, USA',
      p_number: '+1 952 001 8563',
      age: '52',
      gender: 'M',
      bloodGroup: 'A+'
    },
    {
      patientName: 'Richard Wilson',
      patientId: 'P0016',
      address: 'Alabama, USA',
      p_number: '+1 952 001 8563',
      age: '52',
      gender: 'M',
      bloodGroup: 'A+'
    },
    {
      patientName: 'Richard Wilson',
      patientId: 'P0016',
      address: 'Alabama, USA',
      p_number: '+1 952 001 8563',
      age: '52',
      gender: 'M',
      bloodGroup: 'A+'
    }
  ];
  return (
    <Layout>
      <div>
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      My Patients
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">My Patients</h2>
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
                <div className="row row-grid">
                  {myPatient.map((element, index) => {
                    return <MyPatientCard key={index} data={element} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPatient;
