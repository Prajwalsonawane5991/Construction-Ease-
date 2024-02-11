import axios from 'axios';

const CONTRACTOR_BASE_RESTAPI_URL = 'http://localhost:8084/api/services/contractors';


class ContractorService{

  getAllContractors(){

        return axios.get(CONTRACTOR_BASE_RESTAPI_URL)
  }

  addNewContractor(contractor){
        return axios.post(CONTRACTOR_BASE_RESTAPI_URL,contractor)
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

}

export default new ContractorService();