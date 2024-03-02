
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './SuccessfullyRegister.css'; // Import CSS file for styling
import { useLocation, useNavigate } from "react-router-dom";
import ClientService from '../Services/ClientService';
import { toast } from "react-toastify";

function SuccessfullyRegister() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [id,setId] = useState("");
  const [username,setUsername] = useState("");

  useEffect(() => {

    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
      getDetailsByEmail(emailParam);
    } toast.success('Registration successful!');
  }, [email, location.search]);


  const getDetailsByEmail = (email) => {
    ClientService.getDetailsByEmail(email)
      .then((response) => {
        console.log('-------email data in success page--------');
        console.log(response.data);
        console.log(response.data.id);
        console.log(response.data.username);
        setId(response.data.id);
        setUsername(response.data.username);
      })
      .catch(error => {
        console.log(error);
       
      });
  }
   
  
  return (
    <div>
      <section className="md-section" style={{ backgroundColor: "#fff", padding: "120px 0 0",marginBottom:"20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="sec-title sec-title__lg-title text-center">
              <h1  style={{ color: "green" }}><b>WELCOME {username}</b></h1>
               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="success-message">
                <h2>Registration Successful!</h2>
                <p>Your account has been successfully created.</p>
                <div className="payment-instructions">
                  <h3>Payment Instructions:</h3>
                  <ul>
                    <li>
                      <strong>QR Code:</strong> Scan the QR code provided using your preferred mobile payment app. Enter the required amount and complete the transaction.
                    </li>
                    <li>
                      <strong>Bank Transfer:</strong> Transfer the total amount due to the following bank account:
                      <ul>
                        <li>Bank Name: [Bank Name]</li>
                        <li>Account Holder Name: [Your Name]</li>
                        <li>Account Number: [Account Number]</li>
                        <li>IFSC Code: [IFSC Code]</li>
                      </ul>
                    </li>
                    <li>
                      <strong>UPI ID:</strong> Make a payment using UPI to the following UPI ID: [Your UPI ID]
                    </li>
                  </ul>
                  <p style={{ color: "red" }}>After making the payment, please enter the transaction details in the provided space on our registration portal. This will allow us to verify and confirm your payment swiftly.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="registration-fee-paragraph">
                <p>At <b>Construction-Ease</b>, we believe in empowering both contractors and clients to connect seamlessly and embark on successful construction projects. Your registration fee serves as an investment in this shared vision, enabling us to maintain a secure and efficient platform tailored to your needs. By joining our community, you gain access to a diverse range of construction plans crafted by skilled contractors, ensuring you find the perfect match for your project requirements. Moreover, your contribution helps us sustain and enhance our platform, facilitating ongoing support, innovation, and the delivery of exceptional services. Together, we're building more than structures; we're fostering partnerships and driving industry excellence. Thank you for being a part of our journey!</p>
              </div><br></br>
              <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center">
                  <Link to={`/payment/${id}`} className="btn btn-success btn-lg">Continue to Payment</Link>
                </div><br></br><br></br><br></br>
                 <div className="col-md-6 col-md-offset-3 text-center">
                  <Link to={`/`} className="btn btn-success btn-lg">Home</Link>
                </div>
          </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default SuccessfullyRegister;
