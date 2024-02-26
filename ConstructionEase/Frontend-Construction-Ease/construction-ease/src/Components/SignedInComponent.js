import React, { useState, useEffect } from "react";
import ContractorService from "../Services/ContractorService";
import { useNavigate, useParams } from 'react-router-dom';
import ContractorHeaderComponent from "./contractorheader";
import Profile from "./Profile";
import AddProjectComponent from "./AddProjectComponent";
import ContractorFeedbackComponent from "./ContractorFeedback";
import ClientService from "../Services/ClientService";
import AdminService from "../Services/AdminService";
import AdminHeaderComponent from "./AdminHeader";
import LayoutComponent from "./layout";

import { toast } from "react-toastify";
import ClientHeaderComponent from "./ClientHeader";

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
  const [admin, setAdmin] = useState([]);
  const [foundAdmin, setFoundAdmin] = useState(null);


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
    fetchClient();
    fetchAdmin();
  }, []);

  useEffect(() => {
    var user = sessionStorage.getItem("user")
    if (user) {
      var data = JSON.parse(user);
      console.log(data)
      if (data.role === "contractor") {
        
        const foundContractor = contractor.find((c) => c.email === data.email);
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
        }
      }
      else if(data.role==="client")
      {
       
          console.log('hii', username, password)
          const foundClient = client.find((c) => c.email ===data.email );
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
      }
      }
      else{
        if(data.role==="admin")
        {
          if (foundAdmin) {
            const foundAdmin = admin.find((c) => c.id === data.id);
            console.log('authenticated', foundAdmin);
            console.log('found Admin', foundAdmin);
  
            setFoundAdmin(foundAdmin);
            setemail(foundAdmin.username);
            setpassword(foundAdmin.password);
            setId(foundAdmin.id);
            setFlag(true);
        }
      }
    }
  }
  })


  const fetchClient = () => {
    ClientService.loginClient().then((response) => {
      console.log(response.data);
      setClient(response.data);
    }).catch(error => {
      console.log(error);
    });
  }



  const fetchAdmin = () => {
    AdminService.loginAdmin().then((response) => {
      console.log(response.data);
      setAdmin(response.data);
    }).catch(error => {
      console.log(error);
    });
  }




  const login = (e) => {
    e.preventDefault();

    if (loginas == "" || loginas == undefined) {
      toast.error("Select option from the login menu");
    }
    else if (username == "" || username == undefined) {
      toast.error("Enter your Username");
    }
    else if (password == "" || password == undefined) {
      toast.error("Enter your password");
    }
    else {

      console.log(loginas);

      if (loginas === 'Contractor') {
        console.log('hii')
        const foundContractor = contractor.find((c) => c.username === username && c.password === password);
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

          toast.success('Logged in successfully');
          console.log(foundContractor.id)
          sessionStorage.setItem("user", JSON.stringify({
            "role": "contractor",
            "email": foundContractor.email

          }))
         
        }
        else {
          setusername('');
          setpassword('');
          setemail('');
          setmobile('');

          toast.error('Invalid username or password');
        }

      }
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
          sessionStorage.setItem("user",JSON.stringify({
           "role":"client",
            "email":foundClient.email
          }))
        }
        else {
          setusername('');
          setpassword('');
          setemail('');
          setmobile('');

          console.log('Invalid username or password');
          toast.error("Invalid username or password");
        }
      }
      //admin
      if (loginas === 'Admin') {

        console.log('hii admin')
        const foundAdmin = admin.find((c) => c.username === username && c.password === password);
        console.log(foundAdmin)
        if (foundAdmin) {
          console.log('authenticated', foundAdmin);
          console.log('found Admin', foundAdmin);

          setFoundAdmin(foundAdmin);
          setemail(foundAdmin.username);
          setpassword(foundAdmin.password);
          setId(foundAdmin.id);
          setFlag(true);
          console.log('flag is', flag);
          navigate("/admin");
          toast.success("Logged in successfully"+" "+"Welcome"+" "+foundAdmin.username);
          console.log(foundAdmin.id)
          sessionStorage.setItem("user", JSON.stringify({
            "role": "admin",
            "admin_id": foundAdmin.id

          }))

        }
        else {
          setusername('');
          setpassword('');

          console.log('Invalid username or password');
          toast.error('Invalid username or password');
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
          toast.success('Profile updated successfully');

        })
        .catch((error) => {
          console.error('Error updating profile', error);
          toast.error('Error updating profile....');
        });
    }
  }
  return (
    <>
      <div>
        <section className="md-section" style={{ backgroundColor: "#fff", padding: "160px 0 0", marginBottom: "100px" }}>
          <div className="row">
            <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
            </div>
          </div>
          {!flag ?
            <div className="container">
              <div className="sec-title sec-title__lg-title md-text-center">
                <h2 className="sec-title_title">Sign In</h2><span className="sec-title_divider"></span>
              </div>
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
                              <option value="Admin">Admin</option>
                            </select>
                          </div>
                          <div className="form-item">
                            <input className="form-control" type="text" name="username" placeholder="Enter Username" onChange={(e) => setusername(e.target.value)} />
                          </div>
                          <div className="form-item">
                            <input className="form-control" type="password" name="password" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} />
                          </div>
                          <button className="btn btn-outline-primary btn-round mb-30" type="submit" onClick={(e) => login(e)}>Login</button>
                          <button className="btn btn-outline-danger btn-round mb-30" type="reset" style={{ marginLeft: "5px" }}>Cancel</button>
                        </form>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-gmap">
                          <img src="assets/img/service/signin.jpeg" alt="Image not found" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  col-lg-pull-9">
                  <div className="sidebar">
                    <section className="widget">
                      <div className="sec-title">
                        <h2 className="sec-title_title">working hours</h2><span className="sec-title_divider"></span>
                      </div>

                      <div>
                        <div className="widget-contact_item"><span className="widget-contacttitle">Tel:</span><p className="widget-contact_text">+44 1632 960422</p></div>
                        <div className="widget-contact_item"><span className="widget-contacttitle">email:</span><p className="widget-contact_text"><a href="#">constructionease@gmail.com</a></p></div>
                        <div className="widget-contact_item"><span className="widget-contacttitle">Working Hours</span><p className="widget-contact_text">Mon - Sat: 9:00 am - 9:00 pm</p></div>
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

        {flag ? <ContractorHeaderComponent /> : <ClientHeaderComponent></ClientHeaderComponent>}

        {flag && (
          <div>
            {foundContractor && (
              <div>
                <AddProjectComponent id={cid}></AddProjectComponent>
                <Profile contractor={JSON.stringify(foundContractor)}></Profile>
                <ContractorFeedbackComponent id={cid}></ContractorFeedbackComponent>
              </div>
            )}
            {foundClient && (
              <div>
                <LayoutComponent id={cid}></LayoutComponent>

              </div>
            )}


          </div>

        )}


      </div>

    </>
  );
}

export default SignInComponent;