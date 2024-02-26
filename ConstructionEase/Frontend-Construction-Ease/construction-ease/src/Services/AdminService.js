import axios from 'axios';

const ADMIN_BASE_RESTAPI_URL = 'http://localhost:8084/admin/';



class AdminService{

  getContractorCount()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'contractor/count');
  }

  getClientCount()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'client/count');
  }

  getContractorFeedbackCount()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'contractorfeedback/count');
  }

  getClientFeedbackCount()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'clientfeedback/count');
  }

  viewContractorFeedback()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'viewcontractorfeedback');
  }

  deleteFeedbackContractor(id)
  {
    return axios.delete(ADMIN_BASE_RESTAPI_URL+'contractorfeedback/'+id)
  }
  viewlientFeedback()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'viewclientfeedback');
  }

  deleteFeedbackClient(id)
  {
    return axios.delete(ADMIN_BASE_RESTAPI_URL+'clientfeedback/'+id)
  }
  
  loginAdmin()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL+'get');
  }

  saveTransaction(transactionData)
  {
    return axios.post(ADMIN_BASE_RESTAPI_URL + 'saveTransaction', transactionData);
  }
  
  

}


export default new AdminService();