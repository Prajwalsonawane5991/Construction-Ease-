import React, { useState } from 'react';
import ContractorService from '../Services/ContractorService';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';

export default function Profile(props) {
    const contractorFromParent = JSON.parse(props.contractor);

    const [username, setusername] = useState(contractorFromParent.username);
    const [password, setpassword] = useState(contractorFromParent.password);
    const [mobile, setmobile] = useState(contractorFromParent.mobile);
    const [email, setemail] = useState(contractorFromParent.email);
    const [foundContractor, setFoundContractor] = useState(contractorFromParent);

    const updateProfile = (e) => {
        e.preventDefault();
        if (!username) {
            toast.error("Username is a required field");
        } else if (!email) {
            toast.error("Email is a required field");
        } else if (!validateEmail(email)) {
            toast.error("Email is not in correct format");
        } else if (!mobile) {
            toast.error("Mobile number is a required field");
        } else if (mobile.length !== 10) {
            toast.error("Mobile number must be of 10 digits");
        } else if (!password) {
            toast.error("Password is a required field");
        } else {
            const contractorId = foundContractor.id;
            const updatedContractor = {
                ...foundContractor,
                username,
                password,
                email,
                mobile
            };

            setFoundContractor(updatedContractor);

            ContractorService.updateContractor(contractorId, updatedContractor)
                .then((response) => {
                    console.log('Profile updated successfully', response.data);
                    toast.success("Profile updated successfully");
                })
                .catch((error) => {
                    console.error('Error updating profile', error);
                    toast.error("Error updating profile");
                });
        }
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <div>
                <section className="md-section" id="id2" style={{ backgroundColor: "#fff", padding: "100px 0 0" }}>
                    <div className="row">
                        <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
                            <div className="sec-title sec-title__lg-title md-text-center">
                                <h2 className="sec-title__title">Update Profile</h2><span className="sec-title__divider"></span>
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
                                                    <input className="form-control" type="email" name="input" value={email} placeholder="xyz@gmail.com" onChange={(e) => setemail(e.target.value)} />
                                                </div>
                                                <div className="form-item">
                                                    <input className="form-control" type="text" name="input" value={mobile} placeholder="Phone" onChange={(e) => setmobile(e.target.value)} />
                                                </div>
                                                <div className="form-item">
                                                    <input className="form-control" type="password" name="input" value={password} onChange={(e) => setpassword(e.target.value)} />
                                                </div>
                                                <button className="btn btn-primary btn-round mb-30" type="submit" onClick={updateProfile}>Update</button>
                                                <div className="col-md-6 col-md-offset-3 text-center">
                  <Link to={`/`} className="btn btn-success btn-lg">Back</Link>
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
        </>
    )
}
