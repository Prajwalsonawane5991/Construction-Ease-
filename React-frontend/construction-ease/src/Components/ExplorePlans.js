import { useParams, Link } from 'react-router-dom';
import ProjectService from '../Services/ProjectService';
import React, { useEffect, useState } from 'react';
import ClientHeaderComponent from './ClientHeader';
import { useNavigate } from 'react-router-dom';
const ExplorePlans = () => {
  const { value } = useParams();
  // Now 'value' contains the parameter value
  const navigate = useNavigate();

  const [plan, setPlans] = useState([])

  useEffect(()=>{

    getAllPlansByCategory();

  },[])

  const getAllPlansByCategory = () => {
    ProjectService.getProjectByCategory(value).then((response) => {
        console.log(response.data);
        setPlans(response.data)
      
    }).catch(error =>{
        console.log(error);
    })
}
const BackButtonClick = () => {
  
  navigate('/');
};


 
  console.log('props',value)
  return (
    <section style={{ marginBottom: '30px',padding:"20px" }}>
    {/* <ClientHeaderComponent></ClientHeaderComponent> */}
    <div style={{ padding: '20px', marginTop: '40px' }}>
    <h2>Here are List of Plans Available for: {value}</h2>
    <div className="container" style={{ padding: '20px' }}>
      <div className="row row-eq-height">
        {plan.map((plan) => (
          <div className="col-sm-6 col-md-6 col-lg-4" key={plan.id} style={{ marginBottom: '20px' }}>
            <div className="card">
              <img
                src={require(`../assets/img/contractor/${plan.imagePath}`)}
                className="card-img-top"
                alt="Plan"
                style={{ height: '300px', objectFit: 'cover' }} // Set fixed image height and cover overflow
              />
              <div className="card-body">
                <h5 className="card-title">{plan.name}</h5>
                <p className="card-text">{plan.description}</p>
                <p className="card-text" >Rate: {plan.price}/per sq.ft
                <span
                    style={{
                      color: plan.negotiable === 'Negotiable' ? 'green' : 'red',
                      fontWeight: 'bold', paddingLeft: '20px'
                    }}
                  >
                    {plan.negotiable === 'Negotiable' ? 'Negotiable' : 'Fixed'}
                  </span></p>
                  <Link to={`/details/${plan.id}`} style={{ 
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#ffffff',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        fontSize: '14px',
                        transition: 'background-color 0.3s ease'
                      }}>
                        Read more
                      </Link>


              </div>
            </div>
          </div>
        ))}
                              <center>
    <button className="btn btn-danger btn-lg text-center" onClick={BackButtonClick}>
  BACK
</button></center>
      </div>
    </div>
  </div>
  </section>
);
};

export default ExplorePlans;