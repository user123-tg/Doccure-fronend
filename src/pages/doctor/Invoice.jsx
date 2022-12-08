import { Link } from 'react-router-dom';
import Layout from '../../layouts/layout';
import DoctorSidebar from '../../components/doctor/doctorSlider';
import Table from '../../themes/Table/Table';
const Invoices = () => {
  const theadData_billing = ['Invoice No', 'Patient', 'Amount', 'Paid On'];
  const bills = [
    {
      invoice_no: '#INV-0010',
      patient: 'Ruby Perrin',
      patientId: '#PT0016',
      amount: 450,
      paid_on: '14 Nov 2019'
    },
    {
      invoice_no: '#INV-0010',
      patient: 'Ruby Perrin',
      patientId: '#PT0016',
      amount: 450,
      paid_on: '14 Nov 2019'
    },
    {
      invoice_no: '#INV-0010',
      patient: 'Ruby Perrin',
      patientId: '#PT0016',
      amount: 450,
      paid_on: '14 Nov 2019'
    },
    {
      invoice_no: '#INV-0010',
      patient: 'Ruby Perrin',
      patientId: '#PT0016',
      amount: 450,
      paid_on: '14 Nov 2019'
    }
  ];
  return (
    <Layout>
      <div>
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
                        Invoices
                      </li>
                    </ol>
                  </nav>
                  <h2 className="breadcrumb-title">Invoices</h2>
                </div>
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
                <div className="card card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      <Table
                        column={theadData_billing}
                        data={bills}
                        className="table table-hover table-center mb-0"
                        type="billing"
                      />
                    </div>
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
export default Invoices;
