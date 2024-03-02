
import React, { useState } from "react";
import ContractorService from "../Services/ContractorService";
import AdminHeaderComponent from "./AdminHeader";
import { Link } from "react-router-dom";

const ContractorFeedbackComponent = (props) => {

  const [id, setId] = useState(props.id || '');
  
  const [feedback, setFeedback] = useState('');

  const sendFeedback = async (e) => {
    e.preventDefault();

    try {
      const feedbackData = { id,feedback };
      await ContractorService.contractorFeedback(feedbackData);
      alert("Feedback sent successfully");

      // Reset input fields after successful submission
      setId(props.id || '');
      
      setFeedback('');
    } catch (error) {
      console.error(error);
      alert("Failed to send feedback. Please try again.");
    }
  };

  return (
    <div>
     
      <section className="md-section" id="id4" style={{ backgroundColor: "#fff", padding: "160px 0 0" }}>
        <div className="container">
          <div className="row">
          <div className="sec-title sec-title__lg-title md-text-center">
                            <h2 className="sec-title__title">Feedback</h2><span className="sec-title__divider"></span>
                        </div>
            <div className="col-lg-9 col-lg-push-3">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-6">

                  
                    <form className="contact-form" onSubmit={sendFeedback}>
                      <div className="form-item">
                        <input className="form-control" type="text" value={id} name="input" readOnly />
                      </div>
                     
                      <div className="form-item">
                        <textarea name="message" placeholder="Message" value={feedback} style={{ height: "150px" }} onChange={(e) => setFeedback(e.target.value)} />
                      </div>
                      <button className="btn btn-outline-primary btn-round mb-30" type="submit">
                        Send message
                      </button>
                      
                    </form>
                    <div className="col-md-6 col-md-offset-3 text-center">
                  <Link to={`/`} className="btn btn-success btn-lg">Back</Link>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractorFeedbackComponent;
