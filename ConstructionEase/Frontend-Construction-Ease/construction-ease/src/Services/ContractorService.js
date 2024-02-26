import axios from 'axios';

const CONTRACTOR_BASE_RESTAPI_URL = 'http://localhost:8084/api/services/contractors';


class ContractorService{

  getAllContractors(){

        return axios.get(CONTRACTOR_BASE_RESTAPI_URL)
  }

  addNewContractor(contractor){
        return axios.post(CONTRACTOR_BASE_RESTAPI_URL,contractor)
        .then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log(error)
        })
  }

  signUp(userData)
  {
      return axios.post('http://localhost:8084/api/services/register', userData)
     
  }

  verifyOtp(credintials) {
    console.log('in v serive',credintials)
    return axios.put('http://localhost:8084/api/services/verifyotp',credintials);
  }

  loginContractor(){
        return axios.get(CONTRACTOR_BASE_RESTAPI_URL)
  }

  getContractorById(contractorId){
    return axios.get(CONTRACTOR_BASE_RESTAPI_URL + '/' + contractorId);
}

updateContractor(contractorId, contractor){
    return axios.put(CONTRACTOR_BASE_RESTAPI_URL + '/' +contractorId, contractor);
}

deleteContractor(contractorId){
  console.log(contractorId)
    return axios.delete(CONTRACTOR_BASE_RESTAPI_URL + '/' +contractorId);
}

contractorFeedback(feedback){
  return axios.post('http://localhost:8084/admin/contractorfeedback',feedback)
}

forgotPassword(contractorEmail)
{
  return axios.put("http://localhost:8084/api/services/forgot-password/"+contractorEmail);
}


resetPassword(resetData)
{
  return axios.put("http://localhost:8084/api/services/reset-password",resetData);
}

regenerateOtp(email)
{
  return axios.put("http://localhost:8084/api/services/regenerate-otp/"+email);
}


}

export default new ContractorService();