import React from "react";
import { useParams } from 'react-router-dom';
import ProjectService from "../Services/ProjectService";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./detailedComponent.css";
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import ClientHeaderComponent from "./ClientHeader";

const DetailedPlanComponent = () => {

  const navigate = useNavigate();

  const { id } = useParams();
  const [projects, setProjects] = useState([])
  const [category,setCategory] = useState('')
  const [image,setImage] = useState('')

  useEffect(()=>{

    getProjectById();

  },[])




  const getProjectById = () => {
    ProjectService.getProjectById(id).then((response) => {
        console.log(response.data);
        setProjects(response.data);
        setCategory(response.data.category);
      
    }).catch(error =>{
        console.log(error);
    });
};
const BackButtonClick = () => {
  window.history.back();
  // navigate('/');
};
const OfferDetails = ({ category }) => {

  console.log("Category:", category);
  let offerDetails;

  switch (category) {
    case 'Regular':
      offerDetails = (
        <div>
          <h4>Regular Category Offers:</h4>
          <ul>
            <li>Introductory discounts for first-time customers.</li>
            <li>Bundle offers for multiple projects.</li>
            <li>Loyalty points for returning customers.</li>
            <li>Flexible payment options, such as installment plans.</li>
          </ul>
        </div>
      );
      break;
    case "Silver Premium":
      offerDetails = (
        <div>
          <h4>Silver Premium Category Offers:</h4>
          <ul>
            <li>Priority scheduling for project completion.</li>
            <li>Personalized consultation with a dedicated contractor.</li>
            <li>Exclusive access to premium materials or designs.</li>
            <li>Extended warranty or maintenance services.</li>
          </ul>
        </div>
      );
      break;
    case 'Gold Premium':
      offerDetails = (
        <div>
          <h4>Gold Premium Category Offers:</h4>
          <ul>
            <li>VIP treatment with concierge services.</li>
            <li>Customized project designs tailored to the client's preferences.</li>
            <li>Complimentary home inspections or evaluations.</li>
            <li>Access to high-end materials and finishes.</li>
          </ul>
        </div>
      );
      break;
    default:
      offerDetails = <div>No offers available for this category.</div>;
  }
    return offerDetails;
}
const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

const toggleDescription = () => {
  setIsDescriptionExpanded(!isDescriptionExpanded);
};

  return (
    <section style={{ marginBottom: '-50px',padding:"10px" }}>
    {/* <ClientHeaderComponent></ClientHeaderComponent> */}
    <br></br>
    <div> {projects.map((project) => (
      <section className="md-section" id="id7" >
        <div className="container">
        <div className="row gx-5">
  <aside className="col-lg-6">
    <div className="border rounded-4 mb-3">
      <img
        src={require(`../assets/img/contractor/${project.imagePath}`)} // Corrected path to the image
        alt="Image Description" // Provide a descriptive alt text for accessibility
        className="rounded-4 fit img-fluid" // Apply necessary styling classes
        style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }} // Apply necessary inline styles
      />
    </div>
  </aside>

             
         
         
         
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h1 className="title text-dark">
                  {project.name}
                </h1>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    
                  </div>
                 
                
                </div>

                <div className="mb-3">
                  <span className="h2">{project.price}</span>
                  <span className="h4 text-muted">/per Sq.Ft</span>
                </div>

                <p className={`description ${isDescriptionExpanded ? 'expanded' : ''}`}>
                      {project.description}
                    </p>
                    {project.description.length > 100 && (
                      <button className="read-more-button" onClick={toggleDescription}>
                        {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}

                <div className="offer-details">
                    <OfferDetails category={project.category} />
                </div>

                <hr />

                <div className="row mb-4">
  <div className="col-md-4 col-6">
    <h4>Contractor Details</h4>
    <p><strong>Name:</strong> {project.contractor.username}</p>
    
  </div>
  <div className="col-md-4 col-6 mb-3">
    <h3>Contact Details</h3>
    <div className="d-flex align-items-center">
      <FaMobileAlt className="me-2 text-primary" /> {/* Mobile icon */}
      <p className="mb-0"><strong>Mobile No:</strong> {project.contractor.mobile}</p>
    </div>
    <div className="d-flex align-items-center">
      <FaEnvelope className="me-2 text-primary" /> {/* Email icon */}
      <p className="mb-0"><strong>Email:</strong> {project.contractor.email}</p>
    </div>
  </div>
  <div className="col-md-4 col-6 mb-3">
    <h3>Office Address</h3>
    <div className="d-flex align-items-center">
      <FaMapMarkerAlt className="me-2 text-primary" /> {/* Address icon */}
      <div>
        <p><strong>Address:</strong></p>
        <p>Silver Oak</p>
        <p>First Floor, Office No-31</p>
        <p>Senapati Bapat road, Pune-413132</p>
      </div>
    </div>
  </div>
</div>        <button className="btn btn-danger btn-lg text-center" onClick={BackButtonClick}>
  BACK
</button>

                
               
              </div>
            </main>
             
          </div>
        </div>

      </section> ))}
    </div>
    </section>
  );
};

export default DetailedPlanComponent;
