import axios from 'axios';

const CONTRACTOR_BASE_RESTAPI_URL = 'http://localhost:8084/api/services/';


class ProjectService{

  getProjectByCategory(category){

        return axios.get(CONTRACTOR_BASE_RESTAPI_URL+"getProjects/"+category)
  }

  getProjectById(id){
        return axios.get(CONTRACTOR_BASE_RESTAPI_URL+"projects/"+id)
  }

  

}

export default new ProjectService();