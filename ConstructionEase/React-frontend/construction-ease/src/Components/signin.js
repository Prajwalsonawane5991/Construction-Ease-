import React, { useState, useEffect } from "react";
import ContractorService from "../Services/ContractorService";
import ClientService from "../Services/ClientService";
import { useNavigate, useParams } from 'react-router-dom';
import ContractorHeaderComponent from "./contractorheader";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

const SignInComponent = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [cid, setcid] = useState('');
  const [description,setdescription] = useState('');
  const [name,setname] = useState('');
  const [price,setprice] = useState('');
  const [category,setcategory] = useState('')
  const [loginas, setloginas] = useState('');
  const [contractor, setcontractor] = useState([]);
  const [foundContractor, setFoundContractor] = useState(null);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [files, setFiles] = useState([]);
  const [products,setproducts] = useState([]);
  const [client, setClient] = useState([]);
  const [foundClient, setFoundClient] = useState(null);
  

  const getAllProducts = () => {
    ContractorService.getProductsById(cid).then((response) => {
        console.log(response.data);
        setproducts(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
      getAllProducts();
  },[cid])

  const handleFileChange = (e) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Submitting form...'); // Add this line
    // Create a FormData object to store form data and files
    const formData = new FormData();

    // Append the files to the FormData object
    files.forEach((file) => {
      formData.append('file', file);
    });

    // Append other form fields to the FormData object
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('contractorId', cid);
    formData.append('description', description);

    try {
      // Send a POST request to upload the files and form data
      await axios.post('http://localhost:8084/api/services/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      getAllProducts();


      alert('Project added successfully!');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Error adding project.');
    }
    
  };

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
  const fetchClient = () => {
    ClientService.loginClient().then((response) => {
      console.log(response.data);
      setClient(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchClient();
  }, []);
  const login = (e) => {
    e.preventDefault();

    console.log(loginas);

    if (loginas === 'Contractor') {
      console.log('hii', username, password)
      const foundContractor = contractor.find((c) => c.username === username && c.password === password);
      console.log('check', foundContractor);
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
        setcid(foundContractor.id);

        alert('Logged in successfully');
      }
      else {

        console.log('Invalid username or password');
        alert('Invalid username or password');
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
              setcid(foundClient.id);
      
              alert('Logged in successfully');
            }
            else {
      
              console.log('Invalid username or password');
              alert('Invalid username or password');
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
                    <div className="form-item">
                      <label htmlFor="cars">Login As:</label>
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
                    <button className="btn btn-primary btn-round mb-30" type="button" style={{ marginLeft: "5px" }}>Cancel</button>
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
      {flag && <ContractorHeaderComponent />}
      {flag && (
        <div>
          <section className="md-section" id="id2" style={{ backgroundColor: "#fff", padding: "120px 0 0" }}>
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

          <section className="md-section" id="id3" style={{ backgroundColor: "#fff", padding: "100px 0 0" }}>
            
          <div className="sec-title sec-title__lg-title md-text-center">
              <h2 className="sec-title__title">Projects</h2><span className="sec-title__divider"></span>
            </div>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>  
                  <th>Id</th>
                  <th>category</th>
                  <th>description</th>
                  <th>Price</th>
                  <th>name</th>
                  <th> Actions </th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map(products =>
                    <tr key={products.id}>
                      <td>{products.id}</td>
                      <td>{products.category}</td>
                      <td>{products.description}</td>
                      <td>{products.price}</td>
                      <td>{products.name}</td>
                      <td>
                        <button>delete</button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>

            <div>
      {/* Link to navigate to AddProjectComponent with contractorId */}
       <div>
      <button className="btn btn-primary btn-round mb-30" style={{ color: 'white' }}>
        <Link to={`/addproject/${cid}`} style={{ textDecoration: 'none', color: 'white' }}>
          Add Project
        </Link>
      </button>
    </div>
          
    </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default SignInComponent;
