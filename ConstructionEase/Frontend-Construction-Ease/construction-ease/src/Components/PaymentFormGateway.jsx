import { useEffect, useState } from 'react';
import ClientService from '../Services/ClientService';
import './PaymentForm.css';
import { useParams } from 'react-router-dom';
import AdminService from '../Services/AdminService';
import {toast} from 'react-toastify'

const PaymentFormComponent = () => {

  const [clientid, setClientId] = useState('');
  const { id } = useParams();
  const [username,setUsername] = useState('');
  const [transactionId, setTransactionId] = useState('');
 


  const handleSubmit = (e) => {
    e.preventDefault();


    const transactionData = {
      clientid,
      transactionId,
      username
    };

    AdminService.saveTransaction(transactionData)
    .then(response => {
      console.log(response.data);
      // Handle successful submission, e.g., show a success message
      //alert('Your details saved Successfully')
      toast.error("Your details saved Successfully");
    })
    .catch(error => {
      //alert('Error saving transaction')
      toast.error("Error saving transaction");
      console.error('Error saving transaction:', error);
      // Handle error, e.g., show an error message
    });
};


 
  const getDetailsById = (id) => { // Change parameter name to id
    ClientService.getDetailsById(id)
      .then((response) => {
        console.log('in payment');
        console.log(response.data);
        setUsername(response.data.username);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
 
    setClientId(id);
    getDetailsById(id); // Pass id to getDetailsById
  }, [id]); // Add id to dependency array to trigger effect when id changes

  return (
    <section style={{padding: "130px 0 0" }}>
      <div className="container">
        <div className="row">
         
          <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card p-3">
              <div className="img-box">
                <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png" alt="" />
              </div>
              <div className="number">
                <label className="fw-bold">**** **** **** 1060</label>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <small><span className="fw-bold">Expiry date:</span><span>10/16</span></small>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card p-3">
              <div className="img-box">
                <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png" alt="" />
              </div>
              <div className="number">
                <label className="fw-bold">**** **** **** 1060</label>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <small><span className="fw-bold">Expiry date:</span><span>10/16</span></small>
               
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="card p-3">
              <p className="mb-0 fw-bold h4">Payment Methods {clientid}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="card p-3">
              <div className="card-body border p-0">
                <p>
                  <a className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                    aria-controls="collapseExample">
                    <span className="fw-bold">Payment Details</span>
                    <span className="fab fa-cc-paypal"></span>
                  </a>
                </p>
                <div className="collapse p-3 pt-0" id="collapseExample">
  <div className="row">
    <div className="h5 col-lg-8">
      <p className="h4 mb-0 fw-bold" style={{ color: "red" }}>Summary</p><br></br>
      <p className="mb-0"><span className="h5 fw-bold">Objective:</span><span className="c-green">: Registration Fees</span></p>
      <p className="mb-0"><span className="fw-bold">Price:</span><span className="c-green">:Rs. 12000</span></p>
      <p className="mb-0">Join ConstructionEase today to access a seamless platform connecting contractors and clients. Unleash the power of our features tailored to streamline your construction projects.</p>
      <br></br>
      <div> <span className="h4 fw-bold">Bank Details</span><br></br><br></br>
      <li>
                      <strong>Bank Transfer:</strong> Transfer the total amount due to the following bank account:
                      <ul>
                        <li style={{ color: "green" }}> - Bank Name:           [Bank Name]</li>
                        <li style={{ color: "green" }}> - Account Holder Name: [Your Name]</li>
                        <li style={{ color: "green" }}> - Account Number:      [Account Number]</li>
                        <li style={{ color: "green" }}> - IFSC Code:           [IFSC Code]</li>
                      </ul>
                    </li>
      </div>
      <div> <span className="h4 fw-bold">UPI ID's</span><br></br><br></br>
      <li>
                       Transfer the total amount using following UPI ID's:
                      <ul>
                        <li style={{ color: "green" }}> - yasirshaikh@ybl          </li>
                        <li style={{ color: "green" }}> - constructionease@ybl </li>
                       
                      </ul>
                    </li>
      </div>

      <div> <span className="h4 fw-bold">QR Code</span><br></br><br></br>
      <li>
                       Transfer the total amount using Provided QR-Code :
                      <ul>
                        <li style={{ color: "green" }}> - yasirshaikh@ybl          </li>
                        <li style={{ color: "green" }}> - constructionease@ybl </li>
                       
                      </ul>
                    </li>
      </div>
    </div>
    
    <div className="col-lg-4">
      {/* <img src="assets/img/service/2.jpg" alt="QR Code" /> */}
      
      
      <img src={require('../assets/img/service/QrCode.jpeg')}></img>
    </div>
    
  </div>

</div>
              </div>
              <div className="card-body border p-0">
                <p>
                  <a className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                    aria-controls="collapseExample">
                    <span className="fw-bold">transaction Details</span>
                    <span className="">
                      <span className="fab fa-cc-amex"></span>
                      <span className="fab fa-cc-mastercard"></span>
                      <span className="fab fa-cc-discover"></span>
                    </span>
                  </a>
                </p>
                <div className="collapse show p-3 pt-0" id="collapseExample">
                  <div className="row">
                    <div className="col-lg-5 mb-lg-0 mb-3">
                      <p className="h3 mb-0 fw-bold" style={{ color: "green" }}>Summary</p>
                      <br></br>  <br></br>
                      <p className="h5 mb-0" style={{ color: "red" }}>After making the payment, please enter the transaction details in the provided space on our registration portal. This will allow us to verify and confirm your payment swiftly.</p>
                    </div>
                    <div className="col-lg-7">
                    <form onSubmit={handleSubmit} className="form">
  {/* Add input fields for transactionId and upiTransactionDetails */}
  <div className="col-12">
    <div className="form__div">
      <input type="text" className="form-control" placeholder=" " value={transactionId} onChange={(e) => setTransactionId(e.target.value)} />
      <label htmlFor="" className="form__label">Transaction Id</label>
    </div>
  </div>

  <div className="col-12">
    <div className="form__div">
      {/* Add a readonly input field for username */}
      <input type="text" className="form-control" value={username} placeholder=" " readOnly />
      <label htmlFor="" className="form__label">Username</label>
    </div>
    
  </div>
  <div className="col-12">
    <div className="form__div">
      {/* Add a readonly input field for username */}
      <input type="text" className="form-control" value={id} placeholder=" " readOnly />
      <label htmlFor="" className="form__label">Client-ID</label>
    </div>
  </div>
  <div className="col-12">
  <button className="btn btn-primary w-100" type="submit">Submit</button>
</div>
</form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default PaymentFormComponent;
