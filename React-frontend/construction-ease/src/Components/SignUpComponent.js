


import React from "react"
import ContractorService from "../Services/ContractorService";
import ClientService from "../Services/ClientService";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const SignUpComponent = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signup,setSignup]=useState('');
  const [mobile, setMobile] = useState('');
  const [flag,setFlag]=useState('true');
  const navigate = useNavigate();
  const save = (e) => {
    e.preventDefault();
    
    
    if(signup==""|| signup==undefined)
    {
        toast.error("Please select from the Login menu")
      }
     else if(!email.match("@gmail.com")){
        toast.error("Email is not in correct format");
      }
      else if((mobile+"").length==0)
      {
        toast.error("Mobile Number cannot be empty")
    }
    
    else if((mobile+"").length >10)
    {
      toast.error("Mobile Number must be of 10 digit only")
    }
    
    else if((mobile+"").length <10)
    {
      toast.error("Mobile Number must be of 10 digit only")
    }
    
    else if(username.length==0)
    {
      toast.error("Enter the User-Name");
    }
    else if(password.length==0)
    {
      toast.error("Enter the password");
    }
    else{
      
      if(signup==='Contractor'){
       
      const contractor = { username, password, mobile,email };
    
    ContractorService.signUp(contractor)
      .then((response) => {
        setFlag(true);
       
        toast.success("OTP send to Registered Email Id");
        navigate(`/verifyOtp?email=${encodeURIComponent(email)}`);

      // Redirect to the verification page with email and OTP as query parameters
     
       
      })
      .catch(error => {
        console.log(error);
        toast.error("Email id already present");
      });
    }


    if(signup==='Client'){
      const client = { username, password, mobile, email };
      
      ClientService.signUp(client)
        .then((response) => {
          setFlag(true);
          console.log(response.data);
          toast.success("OTP send to Registered Email Id");
          navigate(`/validateOtp?email=${encodeURIComponent(email)}`);
  
        // Redirect to the verification page with email and OTP as query parameters
       
         
        })
        .catch(error => {
          console.log(error);
          toast.error("Email id already present");
        });
      }
  }
  }

    return(

      <div>
      <section className="md-section" style={{ backgroundColor: "#fff", padding: "120px 0 0",marginBottom:"-30px" }}>
        <div className="row">
          <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
            <div className="sec-title sec-title__lg-title md-text-center">
              <h2 className="sec-title__title">Sign Up</h2><span className="sec-title__divider"></span>
            </div>
          </div>
        </div>



        <div className="container">
          <div className="row">
            <div className="col-lg-9  col-lg-push-3">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-6 ">
                    <form className="contact-form" onSubmit={save}>
                    <div className="form-item">
                    <label htmlFor="cars">Signup As:</label>
                      <select name="loginas" id="login" onChange={(e) => setSignup(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Contractor">Contractor</option>
                        <option value="Client">Client</option>
                      </select>
                      </div>
                      <div className="form-item">
                        <input className="form-control" type="email" name="email" value={email} placeholder="Enter email"   onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-item">
                        <input className="form-control" type="number" pattern="[0-9]{10}" name="mobile" value={mobile} placeholder="Enter Mobile No"  onChange={(e) => setMobile(e.target.value)} />
                      </div>
                      <div className="form-item">
                        <input className="form-control" type="text" name="username" value={username} placeholder="Enter Username"  onChange={(e) => setUsername(e.target.value)} />
                      </div>
                      <div className="form-item">
                        <input className="form-control" type="password" value={password} name="password" placeholder="Enter Password"  onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <p><a href="/signin">Already Registered User? go to Sigin</a></p>
                      <button className="btn btn-primary btn-round mb-30" type="submit">Submit</button>
                    </form>
                  
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-gmap">
                      <img src="assets/img/service/signup.jpeg" alt="Using Memes in Your" />
                    </div>
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
    
export default SignUpComponent;