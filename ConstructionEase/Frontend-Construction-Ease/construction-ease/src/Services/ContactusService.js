import axios from 'axios';

const Contact_BASE_RESTAPI_URL = 'http://localhost:8084/contactus';



class ContactusService{


insert(data)
{
    return axios.post(Contact_BASE_RESTAPI_URL+"/insert" ,data);
}
viewcontactus()
{
    return axios.get(Contact_BASE_RESTAPI_URL + "/get");
}
}

export default new ContactusService();