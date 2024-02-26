import React from 'react';
import { Card } from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';
import { FaEnvelopeOpenText } from 'react-icons/fa';

function Home() {
  return (
    <div className="container bg-black p-5 mt-5 mb-5">
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
                <div className='fs-2'>100</div>
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
                <div className='fs-2'>100</div>
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
                <div className='fs-2'>100</div>
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
                <div className='fs-2'>100</div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home;
