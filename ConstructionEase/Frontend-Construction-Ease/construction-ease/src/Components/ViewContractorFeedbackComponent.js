import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import AdminService from '../Services/AdminService';
import AdminHeaderComponent from './AdminHeader';
import {useNavigate}  from 'react-router-dom';
const ViewContractorFeedbackComponent = () => {
  const [feedback, setFeedback] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    ViewFeedBack();
  }, []);

  const ViewFeedBack = () => {
    AdminService.viewContractorFeedback()
      .then((response) => {
        console.log(response.data);
        // Ensure that the response.data is an array before updating the state
        if (Array.isArray(response.data)) {
          setFeedback(response.data);
        } else {
          console.error("Invalid data format. Expected an array.");
          setFeedback([]); // Set feedback to an empty array to prevent the error
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const BackButtonClick = () => {
  
    navigate('/admin');
  };

  const deleteFeedback = (feedbackId) => {
    console.log("Deleting feedback with ID:", feedbackId);
    AdminService.deleteFeedbackContractor(feedbackId)
      .then(() => {
        ViewFeedBack(); // Refresh feedback after deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div style={{ marginTop: "80px",marginBottom:"0px",backgroundImage: `url(${require('./demo.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'whitesmoke',
    padding: '100px' }}> 


    <section style={{ marginTop: "140px",marginBottom:"390px" }}>
    <AdminHeaderComponent></AdminHeaderComponent>
   
   
     <div className="container">
      <h2 className="text-center">Contractor Feedback List</h2>
     <br></br><br></br>
      <Table bordered striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Time</th>
            
            <th>Feedback</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((feedbackItem) => (
            <tr key={feedbackItem.id}>
              <td>{feedbackItem.id}</td>
              <td>{feedbackItem.time}</td>
             
              <td>{feedbackItem.feedback}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteFeedback(feedbackItem.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div><center>
    <button className="btn btn-danger btn-lg text-center" onClick={BackButtonClick}>
  BACK
</button></center>
    </section>

            </div>

  );
};

export default ViewContractorFeedbackComponent;
