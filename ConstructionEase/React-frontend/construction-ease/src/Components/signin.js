import React, { useState, useEffect } from "react";
import ContractorService from "../Services/ContractorService";
import { useNavigate, useParams } from 'react-router-dom';
import ContractorHeaderComponent from "./contractorheader";

const SignInComponent = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [loginas, setloginas] = useState('');
  const [contractor, setcontractor] = useState([]);
  const [foundContractor, setFoundContractor] = useState(null);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

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

    if (loginas === 'Contractor') {
      console.log('hii')
      const foundContractor = contractor.find(c => c.username === username && c.password === password);
      if (foundContractor) {
        console.log('authenticated', foundContractor);
        console.log('found Contractor', foundContractor);
        setFlag(true);
        console.log('flag is', flag);
        setFoundContractor(foundContractor);
        setusername(foundContractor.username);
        setpassword(foundContractor.password);
        setemail(foundContractor.email);
        setmobile(foundContractor.mobile);
        
        alert('Logged in successfully');
      }
      else {
        setusername('');
      setpassword('');
      setemail('');
      setmobile('');
        console.log('Invalid username or password');
        alert('Invalid username or password');
      }
    }
    else {
      console.log(password);
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
        alert('Profile updated successfully');
      })
      .catch((error) => {
        console.error('Error updating profile', error);
        alert('Error updating profile');
      });
  }

  return (
    <div>
      <section className="md-section" style={{ backgroundColor: "#fff", padding: "160px 0 0" }}>
        <div className="row">
          <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
            <div className="sec-title sec-title__lg-title md-text-center">
              <h2 className="sec-title__title">Sign In</h2><span className="sec-title__divider"></span>
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
                      <label htmlFor="cars">Login As:</label>
                      <div className="form-item">
                        <select name="loginas" id="login" onChange={(e) => setloginas(e.target.value)}>
                          <option value="">Select</option>
                          <option value="Contractor">Contractor</option>
                          <option value="Client">Client</option>
                        </select>
                      </div>
                      <div className="form-item">
                        <input className="form-control" type="text" name="username" placeholder="Enter Username" onChange={(e) => setusername(e.target.value)} />
                      </div>
                      <div className="form-item">
                        <input className="form-control" type="text" name="password" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} />
                      </div>
                      <button className="btn btn-primary btn-round mb-30" type="submit" onClick={(e) => login(e)}>Login</button>
                      <button className="btn btn-primary btn-round mb-30" type="submit" style={{ marginLeft: "5px" }}>Cancel</button>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-gmap">
                      <img src="assets/img/service/signin.jpg" alt="Using Memes in Your" />
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
      </section>
      { flag && <ContractorHeaderComponent /> }
      {flag && (
        <section className="md-section" id="id2" style={{ backgroundColor: "#fff", padding: "60px 0 0" }}>
          <div className="row">
            <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
              <div className="sec-title sec-title__lg-title md-text-center">
                <h2 className="sec-title__title">Profile</h2><span className="sec-title__divider"></span>
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
                          <input className="form-control" value={username} onChange={(e) => setusername(e.target.value)} />
                        </div>
                        <div className="form-item">
                          <input className="form-control" type="text" name="input" value={email} placeholder="email" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="form-item">
                          <input className="form-control" type="text" name="input" value={mobile} placeholder="phone" onChange={(e) => setmobile(e.target.value)} />
                        </div>
                        <div className="form-item">
                          <input className="form-control" type="text" name="input" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <button className="btn btn-primary btn-round mb-30" type="submit" onClick={updateProfile}>Update</button>
                      </form>
                    </div>
                    <div className="col-lg-6 ">
                      <div className="contact-gmap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.372477946246!2d151.20128974429977!3d-33.86793372362399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney+NSW%2C+Australia!5e0!3m2!1sen!2s!4v1450842593491" width="100%" height="500" frameborder="0" style={{ border: "0" }} allowfullscreen title="Google Maps"></iframe>
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
        </section>
      )}
    </div>
  );
}

export default SignInComponent;
