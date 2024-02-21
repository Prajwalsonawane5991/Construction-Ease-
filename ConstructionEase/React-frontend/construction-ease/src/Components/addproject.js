import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { addProject } from './apiservice';

function AddProjectComponent() {
  const { contractorId } = useParams();
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [files, setFiles] = useState([]);

  
  const handleFileChange = (e) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    files.forEach((file) => {
      formData.append('file', file);
    });

    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('contractorId', contractorId);
    formData.append('description', description);

    try {
      await addProject(formData);

      // Clear form fields after successful submission
      setDescription('');
      setName('');
      setPrice('');
      setCategory('');
      setFiles([]);

      alert('Project added successfully!');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Error adding project.');
    }
  };


  return (
    <div>
      <h2>Add Project for Contractor ID: {contractorId}</h2>

      <section className="md-section" id="id3" style={{ backgroundColor: '#fff', padding: '60px 0 0' }}>
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
                          type="text"
                          name="price"
                          placeholder="Price (Per square feet)"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>

                      <div className="form-item">
                        <input
                          className="form-control"
                          type="text"
                          name="description"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-item">
                        <h2>Upload Image</h2>
                        <input type="file" onChange={handleFileChange} />
                      </div>
                      <div className="form-item">
                        <input className="form-control" name="cid" type="text" value={contractorId} readOnly />
                      </div>

                      <button className="btn btn-primary btn-round mb-30" type="submit">
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddProjectComponent;
