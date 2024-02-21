// SuccessfullyRegister.js

import React from 'react';
import { Link } from 'react-router-dom';

function SuccessfullyRegister() {
  return (
    <div>
      <section className="md-section" style={{ backgroundColor: "#fff", padding: "120px 0 0" }}>
        <div className="row">
          <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
            <div className="sec-title sec-title__lg-title md-text-center">
              <h2 className="sec-title__title">Successfully Register!!!</h2><span className="sec-title__divider"></span>
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
                    <div>
      <h2>Registration Successful!</h2>
      <p>Your account has been successfully created.</p>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
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
  );
}

export default SuccessfullyRegister;