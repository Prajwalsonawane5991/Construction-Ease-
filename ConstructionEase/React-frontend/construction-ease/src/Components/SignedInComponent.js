import React, { useState, useEffect } from "react";
import ContractorService from "../Services/ContractorService";
import { useNavigate, useParams } from 'react-router-dom';
import ContractorHeaderComponent from "./contractorheader";
import Profile from "./Profile";
import AddProjectComponent from "./AddProjectComponent";
import { toast } from 'react-toastify';

const SignInComponent = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [loginas, setloginas] = useState('');
  const [cid, setId] = useState('');
  const [contractor, setcontractor] = useState([]);
  const [foundContractor, setFoundContractor] = useState(null);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [client, setClient] = useState([]);
  const [foundClient, setFoundClient] = useState(null);
 

  const fetchContractor = () => {
    ContractorService.loginContractor().then((response) => {
      console.log(response.data);
      setcontractor(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchContractor();
  }, []);

  const login = (e) => {
    e.preventDefault();

    console.log(loginas);

    if (loginas === 'Contractor') 
    {
      console.log('hii')
      const foundContractor = contractor.find(c => c.username === username && c.password === password);
      console.log(foundContractor)
      if (foundContractor) {
        console.log('authenticated', foundContractor);
        console.log('found Contractor', foundContractor);

        setFoundContractor(foundContractor);
        setusername(foundContractor.username);
        setpassword(foundContractor.password);
        setemail(foundContractor.email);
        setmobile(foundContractor.mobile);
        setId(foundContractor.id);
        setFlag(true);
        console.log('flag is', flag);

        
        toast.success("Logged in successfully")

        console.log(foundContractor.id)
        // navigate("/projects/"+foundContractor.id);
      }
      else {
        setusername('');
        setpassword('');
        setemail('');
        setmobile('');
        console.log('Invalid username or password');
     
        toast.error("Invalid username or password")
      }
    }
    else {
      if (loginas === 'Client') {
        console.log('hii', username, password)
        const foundClient = client.find((c) => c.username === username && c.password === password);
        console.log('check', foundClient);
        if (foundClient) {
          console.log('authenticated', foundClient);
          console.log('found client', foundClient);
          setFlag(true);
          console.log('flag is', flag);
          setFoundClient(foundClient);
          setusername(foundClient.username);
          setpassword(foundClient.password);
          setemail(foundClient.email);
          setmobile(foundClient.mobile);
          setId(foundClient.id);
  
         
          toast.success("Logged in successfully");
        }
        else {
  
          console.log('Invalid username or password');
         
          toast.error("Invalid username or password");
        }
      }
    }
  }

  const updateProfile = (e) => {

    e.preventDefault();
    const contractorId = foundContractor.id;

    // Update the contractor object with the modified values
    const updatedContractor = {
      ...foundContractor,
      username,
      password,
      email,
      mobile
    };

    // Update the state to reflect the changes
    setFoundContractor(updatedContractor);

    // Now call the API to update the contractor
    ContractorService.updateContractor(contractorId, updatedContractor)
      .then((response) => {
        console.log('Profile updated successfully', response.data);
       
        toast.success("Profile updated successfully");

      })
      .catch((error) => {
        console.error('Error updating profile', error);
  
        toast.error("Error updating profile");
      });
  }

  return (
    <>
      <div>
        <section className="md-section" style={{ backgroundColor: "#fff", padding: "160px 0 0" }}>
          <div className="row">
            <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
            </div>
          </div>
          {!flag ?
            <div className="container">
              <div className="sec-title sec-title__lg-title md-text-center">
                <h2 className="sec-title__title">Sign In</h2><span className="sec-title__divider"></span>
              </div>
              <div className="row">
                <div className="col-lg-9  col-lg-push-3">
                  <div className="main-content">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <form className="contact-form" onSubmit={(e) => login(e)}>
                          <label htmlFor="cars">Login As:</label>
                          <div className="form-item required">
                            <select name="loginas" id="login" onChange={(e) => setloginas(e.target.value)}>
                              <option value="">Select</option>
                              <option value="Contractor">Contractor</option>
                              <option value="Client">Client</option>
                              <option value="Admin">Admin</option>
                            </select>
                          </div>
                          <div className="form-item">
                            <input className="form-control" type="text" name="username" placeholder="Enter Username" required onChange={(e) => setusername(e.target.value)} />
                          </div>
                          <div className="form-item">
                            <input className="form-control" type="text" name="password" placeholder="Enter Password" required  onChange={(e) => setpassword(e.target.value)} />
                          </div>
                          <button className="btn btn-outline-primary btn-round mb-30" type="submit">Login</button>
                          <button className="btn btn-outline-danger btn-round mb-30" type="reset" style={{ marginLeft: "5px" }}>Reset</button>
                          <p><a href="/forget">forget password?</a></p>
                        </form>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-gmap">
                          <img src="assets/img/service/signin.jpg" alt="Image not found" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  col-lg-pull-9">
                  <div className="sidebar">
                    <section className="widget">
                      <div className="sec-title">
                        <h2 className="sec-title__title">working hours</h2><span className="sec-title__divider"></span>
                      </div>
                      <p className="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad sunt est. Eaque odit, et nihil saepe. Eveniet autem, sit quisquam iusto soluta assumenda impedit possimus nesciunt fugiat aut in.</p>
                      <div>
                        <div className="widget-contact__item"><span className="widget-contact__title">Tel:</span><p className="widget-contact__text">+44 1632 960422</p></div>
                        <div className="widget-contact__item"><span className="widget-contact__title">email:</span><p className="widget-contact__text"><a href="#">info@awe7.com</a></p></div>
                        <div className="widget-contact__item"><span className="widget-contact__title">Working Hours</span><p className="widget-contact__text">Mon - Sat: 9:00 - 18:00</p></div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            :
            ""
          }
        </section>
        {flag ? <ContractorHeaderComponent /> : ""}
      
          {flag &&(
          <div>
            <AddProjectComponent id={cid}></AddProjectComponent>
            <Profile contractor={JSON.stringify(foundContractor)}></Profile> 
          </div>

        )}


      </div>
    
    </>
  );
}

export default SignInComponent;