import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import AdminService from '../Services/AdminService';

import AdminHeaderComponent from './AdminHeader';

function Home() {
  const [contractorCount, setContractorCount] = useState('');
  const [clientCount, setClientCount] = useState('');
  const [clientFeedbackCount, setClientFeedbackCount] = useState('');
  const [contractorFeedbackCount, setContractorFeedbackCount] = useState('');

  useEffect(() => {
    getClientCount();
    getContractorCount();
    getClientFeedbackCount();
    getContractorFeedbackCount();
  }, []);

  const getClientCount = () => {
    AdminService.getClientCount().then((response) => {
      console.log(response.data);
      setClientCount(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const getContractorCount = () => {
    AdminService.getContractorCount().then((response) => {
      console.log(response.data);
      setContractorCount(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const getContractorFeedbackCount = () => {
    AdminService.getContractorFeedbackCount().then((response) => {
      console.log(response.data);
      setContractorFeedbackCount(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const getClientFeedbackCount = () => {
    AdminService.getClientFeedbackCount().then((response) => {
      console.log(response.data);
      setClientFeedbackCount(response.data);
    }).catch(error => {
      console.log(error);
    })

  }

  return (
    <div style={{ marginTop: "80px",marginBottom:"0px",backgroundImage: `url(${require('./demo.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'whitesmoke',
    padding: '100px' }}>    
    <AdminHeaderComponent></AdminHeaderComponent>
    <section >
      
      
      
      <div className="container bg-white p-5 mt-5 mb-5">
        <div className="row mt-3 mb-5 text-center">
          <div className='display-6 heading-holder'><span className='text-primary fw-bold'>AdminDashboard</span></div>
        </div>
        <div className="row mt-3 mb-5 card-container lead text-center">
          <div className="col-sm-9 col-md-6 col-lg-6 col-xl-3 mb-3">
            <Card className='py-4 card-holder bg-primary rounded-3 border-0'>
              <Card.Header className='border-white text-start'>Users</Card.Header>
              <Card.Body>
                <div className='d-flex align-items-end justify-content-between'>
                  <div className='pb-3'>
                    <BsPeopleFill className='card-icon' />
                  </div>
                  <div className='fs-2'>{clientCount}</div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-6 col-xl-3 mb-3">
            <Card className="py-4 card-holder bg-info rounded-3 border-0">
              <Card.Header className='border-white text-start'>Contractors</Card.Header>
              <Card.Body>
                <div className='d-flex align-items-end justify-content-between'>
                  <div className='pb-3'>
                    <BsPeopleFill className='card-icon' />
                  </div>
                  <div className='fs-2'>{contractorCount}</div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-6 col-xl-3 mb-3">
            <Card className='py-4 card-holder bg-warning rounded-3 border-0'>
              <Card.Header className='border-white text-start'>UserFeedbacks</Card.Header>
              <Card.Body>
                <div className='d-flex align-items-end justify-content-between'>
                  <div className='pb-3'>
                    <FaEnvelopeOpenText className='card-icon' />
                  </div>
                  <div className='fs-2'>{clientFeedbackCount}</div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-6 col-xl-3 mb-3">
            <Card className='py-4 card-holder bg-danger rounded-3 border-0'>
              <Card.Header className='border-white text-start'>ContractorFeedbacks</Card.Header>
              <Card.Body>
                <div className='d-flex align-items-end justify-content-between'>
                  <div className='pb-3'>
                    <FaEnvelopeOpenText className='card-icon' />
                  </div>
                  <div className='fs-2'>{contractorFeedbackCount}</div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </div>

  )
}

export default Home;
