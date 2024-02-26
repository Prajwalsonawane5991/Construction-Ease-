import React from "react";

const AboutComponent = () => {
  return (
    <section className="md-section" id="id2" style={{ backgroundColor: "#fff", padding: "60px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-30">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="sec-title sec-title__lg-title">
                <h2 className="sec-title__title">About <span>The Construction-Ease</span></h2>
                <span className="sec-title__divider"></span>
              </div>
              <p>Build your dream home with ease. Our user-friendly platform lets homeowners effortlessly choose contractors and different plans, all from the comfort of home. Effortlessly access details of different contractors through simple email and password registration. For contractors, joining is a breeze—they can create and manage profiles with ease. Security is of utmost importance with admin exclusive role switching. The overall aim is to offer a hassle-free, efficient, and interactive home construction experience, saving users time and effort while providing a centralized hub for streamlined collaboration between homeowners and contractors.</p>
              <a className="btn btn-outline-primary " href="#">More about us</a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about">
              <img src="assets/img/about/2.jpg" alt="" />
              <blockquote className="quote-02 about-quote">
                <p className="quote-02__text">Collaboration between users and contractors is the key to unlocking extraordinary results. Users bring their vision, while contractors contribute expertise. Together, we create something greater than the sum of its parts, fueled by trust, transparency, and dedication.</p>
                <div className="authorbox">
                  <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}>
                    <img src="https://unsplash.it/800" alt="" />
                  </div>
                  <div className="authorbox__info">
                    <h5 className="authorbox__name">Construction-Ease</h5>
                    <p className="authorbox__work">Developer</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
