import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { Modal } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { prescription_Getbyid } from '../../../store/actions/user';
const PrescriptionsTable = ({ data }) => {
  const componentRef = useRef();
  const [medicineData, setMedicineData] = useState([]);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [print, setPrint] = useState(false);
  const medicines = useSelector((state) => state?.user);
  //console.log(medicines, 'GGGGGGGGGGGGGGG');
  const handleClose = () => {
    setShow(false);
  };
  const getById = async () => {
    setShow(true);
    dispatch(prescription_Getbyid());
  };
  useEffect(() => {
    setMedicineData(medicines?.user?.medicines || []);
  }, [medicines?.user?.medicines]);
  console.log(medicineData, 'KKKKKKK');
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  return (
    <>
      <tr>
        <td>{data.date}</td>
        <td>{data.name}</td>
        <td>
          <h2 className="table-avatar">
            <Link to="/patient/doctor-profile" className="avatar avatar-sm mr-2">
              <img
                className="avatar-img rounded-circle"
                src={require('../../../assets/images/doctor-thumb-01.jpg')}
                alt="User "
              />
            </Link>
            <Link to="/patient/doctor-profile">
              {data.doctor} <span>{data.speciality}</span>
            </Link>
          </h2>
        </td>
        <td className="text-right">
          <div className="table-action">
            <Link
              to="#0"
              onClick={() => {
                getById();
                handlePrint();
                setPrint(true);
              }}
              className="btn btn-sm bg-primary-light">
              <i className="fas fa-print"></i> Print
            </Link>
            <Link to="#0" onClick={getById} className="btn btn-sm bg-info-light">
              <i className="far fa-eye"></i> View
            </Link>
          </div>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h5 className="modal-title">Prescription Details</h5>
        </Modal.Header>
        <Modal.Body>
          <div ref={componentRef}>
            <table className="printtable">
              <thead className="tablehead">
                <th className="title">MEDICINE NAME:</th>
                <th className="title">DAYS:</th>
                <th className="title">POWER:</th>
                <th className="title">QUANTITY:</th>
              </thead>
              <tbody>
                {medicineData?.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td className="data">{item.medicinename}</td>
                      <td className="data">{item.days}</td>
                      <td className="data">{item.power}</td>
                      <td className="data">{item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
              {print ? (
                <ReactToPrint
                  trigger={() => (
                    <button id="printbutton" className="btn btn-sm bg-primary-light">
                      <i className="fas fa-print"></i> Print
                    </button>
                  )}
                  content={() => componentRef.current}
                />
              ) : null}
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PrescriptionsTable;
