// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import ContractorService from "../Services/ContractorService";
// import { toast } from 'react-toastify';

// const ForgetPassword = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpFlag, setOtpFlag] = useState(false);
//   const navigate = useNavigate(); // Use useNavigate hook
//   const [flag, setFlag]=useState();
//   const generateOTP = () => {
//      if(!email.match("@gmail.com")){
//       toast.error("Email is not in correct format");
//     }
//     ContractorService.forgotPassword(email)
//       .then((response) => {
//         toast.success(response.data);
//         setOtpFlag(true);
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error("Enter the registered Email-Id")
//       })
//   }

//   const verifyOTP = () => {
//     if(otp.length==0)
//     {
//       toast.error("Please Enter the Otp");
//     }
//     else{
//     ContractorService.verifyOtp({
//       "email": email,
//       "otp": otp
//     })
//       .then((response) => {
//         console.log(response.data);
//         setFlag(true)
//         console.log(flag)
//         if (flag) {
//           toast.success("OTP verified successfully");
//           navigate('/reset-password/' + email);
//         } else {
//           toast.error("OTP Mismatch... Please try again");
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// }

//   return (
//     <div>
//       <section className="md-section" style={{ backgroundColor: "#fff", padding: "120px 0 0" }}>
//         <div className="row">
//           <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
//             <div className="sec-title sec-title__lg-title md-text-center">
//               <h2 className="sec-title__title">Verify Otp</h2><span className="sec-title__divider"></span>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-9  col-lg-push-3">
//               <div className="main-content">
//                 <div className="row">
//                   <div className="col-lg-6 ">
//                     <form className="contact-form">
//                       <div className="form-item">
//                         <input
//                           className="form-control"
//                           type="email"
//                           name="email"
//                           value={email}
//                           required
                  
//                           placeholder="Enter email"
//                           onChange={(e) => setEmail(e.target.value)}
//                           disabled={otpFlag ? true : false}
                          
                          
//                         />
//                       </div>
//                       <button className="btn btn-outline-warning mb-3" type="button" onClick={generateOTP} disabled={otpFlag}>Send OTP</button>
//                       <div className="form-item">
//                         <input
//                           className="form-control"
//                           type="text"
//                           name="otp"
//                           value={otp}
//                           placeholder="Enter OTP"
//                           disabled={!otpFlag}
//                           onChange={(e) => setOtp(e.target.value)}
//                         />
//                       </div>
//                       <button className="btn btn-outline-success btn-round mb-40" type="button" onClick={verifyOTP} disabled={!otpFlag}>Verify OTP</button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ForgetPassword;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContractorService from "../Services/ContractorService";
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpFlag, setOtpFlag] = useState(false);
  const navigate = useNavigate();
  
  const generateOTP = () => {
   // if (!email.match(/\b[A-Za-z0-9._%+-]+@gmail.com\b/)) {
    if(!email.match("@gmail.com")){
      toast.error("Email is not in correct format");
      return;
    }

    ContractorService.forgotPassword(email)
      .then((response) => {
        toast.success(response.data);
        setOtpFlag(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Enter the registered Email-Id");
      });
  }

  const verifyOTP = () => {
    if (otp.trim() === "") {
      toast.error("Please Enter the OTP");
      return;
    }

    ContractorService.verifyOtp({
      "email": email,
      "otp": otp
    })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          toast.success("OTP verified successfully");
          navigate('/reset-password/' + email);
        } 
      })
      .catch(error => {
        console.log(error);
        toast.error("Error verifying OTP. Please try again.");
      });
  }

  return (
    <div>
      <section className="md-section" style={{ backgroundColor: "#fff", padding: "120px 0 0" }}>
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
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          value={email}
                          required
                          placeholder="Enter email"
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={otpFlag}
                        />
                      </div>
                      <button className="btn btn-outline-warning mb-3" type="button" onClick={generateOTP} disabled={otpFlag}>Send OTP</button>
                      <div className="form-item">
                        <input
                          className="form-control"
                          type="text"
                          name="otp"
                          value={otp}
                          placeholder="Enter OTP"
                          disabled={!otpFlag}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </div>
                      <button className="btn btn-outline-success btn-round mb-40" type="button" onClick={verifyOTP} disabled={!otpFlag}>Verify OTP</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgetPassword;

