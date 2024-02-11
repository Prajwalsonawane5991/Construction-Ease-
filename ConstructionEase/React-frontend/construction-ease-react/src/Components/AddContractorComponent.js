import React, { useState,useEffect } from "react";
import ContractorService from "../Services/ContractorService";
import {Link, useNavigate,useParams} from 'react-router-dom';

const AddContractorComponent = () => {


  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const [email,setemail] = useState('')
  const [mobile,setmobile] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();


  const saveOrUpdateContractor = (e) =>
  {
    e.preventDefault();

    const contractor = {username,password,email,mobile}

    if(id)
    {
        console.log('ifffff')
          ContractorService.updateContractor(id,contractor).then((response) => {
            navigate('/contractor')
          }).catch(error => {
            console.log(error)
          })
    }
    else
    {
          ContractorService.addNewContractor(contractor).then(
            (response)=>{
              console.log(response.data)
              navigate('/contractor');
            
            }).catch(error => { console.log(error)})
    }
  }
      useEffect(() => {

          ContractorService.getContractorById(id).then((response) =>{
              setusername(response.data.username)
              setpassword(response.data.password)
              setemail(response.data.email)
              setmobile(response.data.mobile)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update contractor</h2>
        }else{
            return <h2 className = "text-center">Add contractor</h2>
        }
    }
    

  

  return(
    <div>
      <center>
        <h2><b>   {
                           title()
                       }</b></h2>
        <br></br>
        Enter Email :
        <input type="text" name="email" value={email} placeholder="Enter email " 
            onChange={(e)=>setemail(e.target.value)} />

        Enter Mobile :
        <input type="text" name="mobile" value={mobile} placeholder="Enter Mobile No. " 
            onChange={(e)=>setmobile(e.target.value)} />

        Enter username :
        <input type="text" name="username" value={username} placeholder="Enter username " 
            onChange={(e)=>setusername(e.target.value)} />

        <br></br>
        Enter Password :
        <input type="text" name="password" value={password} placeholder="Enter Password " 
            onChange={(e)=>setpassword(e.target.value)} />
        
        <br></br>
        <button onClick={(e)=>saveOrUpdateContractor(e)}>Submit</button>
        <Link to="/contractor">Cancel</Link>
      </center>
    </div>
  )
}

export default AddContractorComponent