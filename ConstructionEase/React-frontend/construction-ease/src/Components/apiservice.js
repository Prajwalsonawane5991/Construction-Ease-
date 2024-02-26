import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:8084/api/services',
});

export const addProject = async (formData) => {
  try {
    const response = await apiService.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error adding project');
  }
};

export default apiService;
