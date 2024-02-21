import axios from 'axios';

const CLIENT_BASE_RESTAPI_URL = 'http://localhost:8084/client';



class ClientService{



  signUp(userData)
  {
      return axios.post('http://localhost:8084/client/resister', userData)
     
  }

  validOtp(credintials) {
    const {email,otp}=credintials;
    return axios.put(`http://localhost:8084/client/verifyotp?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`);
  }
  loginClient(){
    return axios.get(CLIENT_BASE_RESTAPI_URL + '/client');
}
}

export default new ClientService();