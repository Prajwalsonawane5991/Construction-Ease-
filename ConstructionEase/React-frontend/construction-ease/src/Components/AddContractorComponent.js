import React, { useState,useEffect } from "react";
import ContractorService from "../Services/ContractorService";
import {Link, useNavigate,useParams} from 'react-router-dom';

const AddContractorComponent = () => {


  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const [email,setemail] = useState('')
  const [mobile,setmobile] = useState('')

  const navigate = useNavigate();
  const {id} = useParams();


  const saveOrUpdateContractor = (e) =>
  {
    e.preventDefault();

    const contractor = {username,password,email,mobile}

    if(id)
    {
        console.log('ifffff')
          ContractorService.updateContractor(id,contractor).then((response) => {
            navigate('/contractor')
          }).catch(error => {
            console.log(error)
          })
    }
    else
    {
          ContractorService.addNewContractor(contractor).then(
            (response)=>{
              console.log(response.data)
             navigate('/contractor');
            
            }).catch(error => { console.log(error)})
    }
  }
      useEffect(() => {

          ContractorService.getContractorById(id).then((response) =>{
              setusername(response.data.username)
              setpassword(response.data.password)
              setemail(response.data.email)
              setmobile(response.data.mobile)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    

  

  return(
    <div>
    <section className="md-section"  style={{ backgroundColor: "#fff", padding: "120px 0 0" }}>
  
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
                  <form className="contact-form">



                


											<div className="form-item">
												<input className="form-control" type="text" name="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} />
											</div>
		
		
		
											<div className="form-item">
												<input className="form-control" type="text" name="mobile" placeholder="Enter Mobile No" onChange={(e)=>setmobile(e.target.value)}/>
											</div>


                      <div className="form-item">
												<input className="form-control" type="text" name="username" placeholder="Enter Username" onChange={(e)=>setusername(e.target.value)}/>
											</div>
     
											<div className="form-item">
												<input className="form-control" type="text" name="password" placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)} />
											</div>

     
		
										
		
											<button className="btn btn-outline-primary btn-round mb-30" type="submit" onClick={(e)=>saveOrUpdateContractor(e)}>Submit</button>

                      <button className="btn btn-outline-danger btn-round mb-30" type="submit"  style={{  
                            marginLeft: "5px"  // Add 5px of space around the button
                        }}>Cancel</button>

       

                   
										</form>
									</div>

                  <div className="col-lg-6">
                        <div className="contact-gmap">
                            <img
                                src="assets/img/service/signup.jpg"
                                alt="Using Memes in Your"
                            />
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
										<div className="widget-contact__item"><span className="widget-contact__title">Tel:</span>
											<p className="widget-contact__text">+44 1632 960422</p>
										</div>
										<div className="widget-contact__item"><span className="widget-contact__title">email:</span>
											<p className="widget-contact__text"><a href="#">info@awe7.com</a></p>
										</div>
										<div className="widget-contact__item"><span className="widget-contact__title">Working Hours</span>
											<p className="widget-contact__text">Mon - Sat: 9:00 - 18:00</p>
										</div>
									</div>
		
								</section>
		
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>



    
        
      
   
  )
}

export default AddContractorComponent;