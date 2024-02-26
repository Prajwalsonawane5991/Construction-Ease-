import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom'; // Import useParams hook

const ContractorImage = () => {
  const { id } = useParams(); // Extract the id parameter from the URL

  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    const fetchImagePath = async () => {
      try {
        const response = await axios.get(`http://localhost:8084/api/services/upload/${id}`);
        setImagePath(response.data);
      } catch (error) {
        console.error('Error fetching image path:', error);
      }
    };

    fetchImagePath();
  }, [id]); // Include id in the dependency array

  return (
    <div>
      <h2>Display Image for Contractor ID: {id} {imagePath}</h2>
      
    
      <img src={imagePath}></img>
    

    </div>
  );
};




export default ContractorImage;
