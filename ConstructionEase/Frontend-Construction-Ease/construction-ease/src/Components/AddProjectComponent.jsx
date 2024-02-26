


import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { addProject } from '../apiservice';
import { toast } from 'react-toastify';




function AddProjectComponent(props) {
    // const props = useParams();
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const  [negotiable,setNegotiable] = useState('')
    const [file, setFiles] = useState(null);
    const [cid, setCid] = useState('');
    const [area, setArea] = useState('');


    const handleFileChange = (e) => {
        e.preventDefault();
        setCid(props.id);
        const selectedFiles = (e.target.files[0]);
        setFiles(selectedFiles);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name==""||name==undefined)
        {
            toast.error("Project name is a required field")
        }
       else if(category==""||category==undefined)
        {
            toast.error("select category")
        }
        else if(price==""||price==undefined)
        {
            toast.error("Price is a required field")
        }
        else if(description==""||description==undefined)
        {
            toast.error("Enter Description")
        }
        else if(file==""||file==undefined)
        {
            toast.error("file is not chosen")
        }
        else if(negotiable==""||negotiable==undefined)
        {
            toast.error("select the deal type")
        }
        else if(area==""||area==undefined)
        {
            toast.error("select the area")
        }

        else{
        const formData = new FormData();
        console.log(file);
        formData.append("file",file);
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('contractorId', cid);
        formData.append('description', description);
        formData.append('negotiable', negotiable);
        formData.append('area', area);

        try {
            await addProject(formData);

            // Clear form fields after successful submission
            setDescription('');
            setName('');
            setPrice('');
            setCategory('');
            setFiles([]);
            setNegotiable('');
            setArea('');

         
            toast.success("Project added successfully! ");
        } catch (error) {
            console.error('Error adding project:', error);
            toast.error("Error adding project."+error);
        }
    };
    }

    return (
        <>
        <div id="id3">
         

            <section className="md-section"  style={{ backgroundColor: '#fff', padding: '90px 0 0' }}>
                <div className="row">
                    <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
                        <div className="sec-title sec-title__lg-title md-text-center">
                            <h2 className="sec-title__title">Add Projects</h2>
                            <span className="sec-title__divider"></span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-lg-push-3">
                            <div className="main-content">
                                <div className="row">
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-lg-6 ">
                                            <div className="form-item">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Project Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-item">
                                                <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                                    <option value="">Select</option>
                                                    <option value="Regular">Regular</option>
                                                    <option value="Silver Premium">Silver Premium</option>
                                                    <option value="Gold Premium">Gold Premium</option>
                                                </select>
                                            </div>
                                            <div className="form-item">
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="price"
                                                    placeholder="Rate (Per square feet)"
                                                    value={price}
                                                 
                                                    onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-item">
                                                <input type='textarea'
                                                    className="form-control"
                                                    name="description"
                                                    placeholder="Description"
                                                    value={description}
                                                   
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </div>

                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-item">
                                                
                                                <input type="file" onChange={handleFileChange} />
                                            </div>
                                            <div className="form-item">
                                                <input className="form-control" name="contractorId"  placeholder="ContractorId" type="text" value={props.id} readOnly />
                                            </div>
                                            <div className="form-item">
                                            <select name="negotiable" id="negotiable" value={negotiable}  onChange={(e) => setNegotiable(e.target.value)}>
                                                    <option value="">Select</option>
                                                    <option value="Negotiable">Negotiable</option>
                                                    <option value="Non Negotiable">Non Negotiable</option>
                                                </select>
                                            </div>
                                            <div className="form-item">
                                                <input className="form-control" name="area"  placeholder="Square ft Area Range" type="text" value={area} 
                                            onChange={(e) => setArea(e.target.value)}/>
                                            </div>
                                            <button className="btn btn-outline-primary btn-round mb-30" type="submit">
                                                Add
                                            </button>
                                            
                                        </div>
                                        <div className="col-md-6 col-md-offset-3 text-center">
                  <Link to={`/`} className="btn btn-success btn-lg">Back</Link>
                </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
        </>
    );
}

export default AddProjectComponent;
