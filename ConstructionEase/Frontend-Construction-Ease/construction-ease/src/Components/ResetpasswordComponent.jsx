// import React from 'react';
// import { useState } from 'react';
// import ContractorService from '../Services/ContractorService';
// import { useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

// function ResetpasswordComponent() {
//     const [password,setPassword] = useState("");
//     const [confirmPassword,setConfirmPassword] = useState("");
//     const [flag, setFlag]=useState("");
//     const props = useParams();
//     const navigate=useNavigate();
    

//     const reset=(e1)=>{
//       e1.preventDefault();
//       if (password==""||password==undefined)
//       {
//         toast.error("Set The New password")
//       }
//      else if(confirmPassword==""||confirmPassword==undefined)
//       {
//         toast.error("Please confirm the set password")
//       }
      
        
//       else if(password != confirmPassword && password===""&& confirmPassword==="")
//             toast.error("Password not matched");
//         else
//         {  
            
//             setFlag(true);
//             if(flag){
//             toast.success("Password changed successfully");
//             navigate("/signin")
//             }
//             ContractorService.resetPassword({
//                 "email" : props.email,
//                 "password" : password
//             })
//             .then((response)=>{
//                 console.log(response.data);
             

//             })
//             .catch((error)=>{
//                 console.log(error)
//             })
//         }

//     }
//   return (
//     <div>
//     <section className="md-section" style={{ backgroundColor: "#fff", padding: "120px 0 0" }}>
//       <div className="row">
//         <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
//           <div className="sec-title sec-title__lg-title md-text-center">
//             <h2 className="sec-title__title">Reset Password</h2><span className="sec-title__divider"></span>
//           </div>
//         </div>        
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-9  col-lg-push-3">
//             <div className="main-content">
//               <div className="row">
//                 <div className="col-lg-6 ">
//                   <form className="contact-form text-center" onSubmit={(e1)=>reset(e1)}>
//                     <div className="form-item">
//                       <input className="form-control" type="text" name="text"  placeholder="Enter new password"  onChange={(e) => setPassword(e.target.value)} />
//                       <br />
//                       <br />
//                      <input className="form-control" type="password" name="text"   placeholder="Confirm password"  onChange={(e) => setConfirmPassword(e.target.value)} />
//                       <br />
//                       <button className="btn btn-outline-success  mb-3" type="submit" >Confirm</button>
                    
//                       <button className="btn btn-outline-danger  mb-3" type="reset" style={{ marginLeft: "10px" }}>Reset</button>
//                     </div>
                   
                  

               
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
//   )
// }

// export default ResetpasswordComponent;

import React, { useState } from 'react';
import ContractorService from '../Services/ContractorService';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function ResetpasswordComponent() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const { email } = useParams();
    const navigate = useNavigate();

    const reset = (e1) => {
        e1.preventDefault();
        if (!password || !confirmPassword) {
            toast.error("Please enter both new password and confirm password");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Password and confirm password do not match");
            return;
        }

        ContractorService.resetPassword({
            "email": email,
            "password": password
        })
        .then((response) => {
            console.log(response.data);
            setFlag(true);
            if (password === confirmPassword) {
              
                toast.success("Password changed successfully");
                navigate("/signin");
            }
        })
        .catch((error) => {
            console.log(error);
            toast.error("Error resetting password. Please try again");
        });
    }

    return (
        <div>
            <section className="md-section" style={{ backgroundColor: "#fff", padding: "120px 0 0" }}>
                <div className="row">
                    <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
                        <div className="sec-title sec-title__lg-title md-text-center">
                            <h2 className="sec-title__title">Reset Password</h2><span className="sec-title__divider"></span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9  col-lg-push-3">
                            <div className="main-content">
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <form className="contact-form text-center" onSubmit={(e1) => reset(e1)}>
                                            <div className="form-item">
                                                <input className="form-control" type="text" name="password" placeholder="Enter new password" onChange={(e) => setPassword(e.target.value)} />
                                                <br />
                                                <br />
                                                <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                                                <br />
                                                <button className="btn btn-outline-success  mb-3" type="submit">Confirm</button>
                                                <button className="btn btn-outline-danger  mb-3" type="reset" style={{ marginLeft: "10px" }}>Reset</button>
                                            </div>
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

export default ResetpasswordComponent;
