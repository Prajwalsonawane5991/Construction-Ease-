
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom"; // Import useNavigate
import ContractorService from "../Services/ContractorService";
import ClientService from "../Services/ClientService"
import { toast } from 'react-toastify';

const OTPValidationClient = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState("");
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate hook
  const params = useParams();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location.search]);

  const verifyOTP = () => {
    ClientService.verifyOtp({
      "email": email,
      "otp": otp
    })
      .then((response) => {
        console.log(response.data);
        toast.success("OTP Verification Done")
        navigate(`/SuccessfullyRegister?email=${encodeURIComponent(email)}`);
      })
      .catch(error => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  }

  const [countdown, setCountdown] = useState(300);

  const setIntervalForCountdown = () => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(interval); // Stop the interval when countdown reaches 0
          return prevCountdown; // Return the current countdown value
        }
      });
    }, 1000);
  }

  useEffect(() => {
    setIntervalForCountdown();
  }, [])

  const handleRegenration =() =>{
    ClientService.regenerateOtp(email)
    .then((response) => {
      setCountdown(300);
      setIntervalForCountdown();
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <section className="md-section" style={{ backgroundColor: "#fff", padding: "120px 0 0",marginBottom:"110px" }}>
        <div className="row">
          <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
            <div className="sec-title sec-title__lg-title md-text-center">
              <h2 className="sec-title__title">Verify OTP</h2><span className="sec-title__divider"></span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9  col-lg-push-3">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-6 ">
                    <form className="contact-form">
                      <div className="form-item">
                        <input className="form-control" type="text" name="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} readOnly />
                      </div>
                      <div className="form-item">
                        <input className="form-control" type="text" name="otp"
                        disabled = {countdown == 0 ? true : false}
                         value={otp} placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
                      </div>
                      <div className="lead my-3 text-danger">Time Left : {countdown}</div>
                      <button className="btn btn-primary btn-round mb-30" type="button" onClick={verifyOTP}>Verify</button>
                      <button className="btn btn-primary btn-round mb-30"
                        disabled = {countdown == 0 ? false : true}
                      type="button" style={{ marginLeft: "5px" }} onClick={handleRegenration}>Regenerate</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default OTPValidationClient;
