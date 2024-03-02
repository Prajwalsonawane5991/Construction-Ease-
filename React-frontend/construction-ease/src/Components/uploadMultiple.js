import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadMany = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file); // Append each file with the key 'files'
    });

    try {
      await axios.post('http://localhost:8084/api/services/uploadmany', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Files uploaded successfully!');
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files.');
    }
  };

  return (
    <div>
      <h2>Upload Images</h2>
      <input type="file" onChange={handleFileChange} multiple />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default ImageUploadMany;
