import React, { useState } from "react";
import ContactusService from "../Services/ContactusService";
import { toast } from "react-toastify";

const ContactusComponent = () => {




  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const send = async (e) => {
    e.preventDefault();

    try {
      await ContactusService.insert(formData);
      alert("Great, we have received your response");
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send Problem. Please try again.");
    }
  };

  return (
	<div>
	<section className="md-section" id="id7" style={{ backgroundColor: "#fff", padding: "60px 0 0" }}>

		<div className="row">
			<div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">

				<div className="sec-title sec-title__lg-title md-text-center">
					<h2 className="sec-title__title">Contact us</h2><span className="sec-title__divider"></span>
				</div>

			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-lg-9  col-lg-push-3">
					<div className="main-content">
						<div className="row">
							<div className="col-lg-6 ">
							<form className="contact-form" onSubmit={send}>
            <div className="form-item">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-item">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })
                }
				required
              />
            </div>

            <div className="form-item">
              <input
                className="form-control"
                type="text"
                name="mobile"
                placeholder="phone"
                pattern="[0-9]{10}"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
				required
              />
            </div>

            <div className="form-item">
              <textarea
                name="message"
                placeholder="Message"
                style={{ height: "150px" }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
				required
              ></textarea>
            </div>

            <button className="btn btn-outline-primary btn-round mb-30" type="submit">
              Send message
            </button>
          </form>
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

							<p className="mb-30">GRHM+P9C, Swastik Society, Model Colony, Wadarvadi, Pune, Maharashtra 411016, India</p>


							<div>
								<div className="widget-contact__item"><span className="widget-contact__title">Tel:</span>
									<p className="widget-contact__text">9689880***</p>
								</div>
								<div className="widget-contact__item"><span className="widget-contact__title">email:</span>
									<p className="widget-contact__text"><a href="#">construction***@gmail.com</a></p>
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

export default ContactusComponent;
