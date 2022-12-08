import React from 'react';

import MedicalRecordTable from '../dashboard/medicalRecordTable';
import Modal from 'react-bootstrap/Modal';
import doctorMedicalRecords from '../../../assets/jsons/doctorMedicalRecords';

const MedicalRecordsTable = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="text-right">
        <a
          href="#0"
          className="add-new-btn"
          onClick={handleShow}
          data-target="#add_medical_records">
          Add Medical Records
        </a>
      </div>
      <div className="card card-table mb-0">
        <div className="card-body">
          <table className="table table-hover table-center mb-0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date </th>
                <th>Description</th>
                <th>Attachment</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {doctorMedicalRecords.map((data, index) => {
                return <MedicalRecordTable data={data} key={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Medical Records</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Date</label>
            <input type="text" className="form-control datetimepicker" value="31-10-2019" />
          </div>
          <div className="form-group">
            <label>Description ( Optional )</label>
            <textarea className="form-control"></textarea>
          </div>
          <div className="form-group">
            <label>Upload File</label>
            <input type="file" className="form-control" />
          </div>
          <div className="submit-section text-center">
            <button type="submit" className="btn btn-primary submit-btn">
              Submit
            </button>
            <button type="button" className="btn btn-secondary submit-btn" data-dismiss="modal">
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MedicalRecordsTable;
