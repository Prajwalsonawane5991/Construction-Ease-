
import React, { useEffect, useState } from 'react'
import ContractorService from '../Services/ContractorService'
import { Link } from 'react-router-dom'




const ListContractorsComponent = () => {

  const [contractor, setcontractor] = useState([])

  useEffect(()=>{

    getAllContractors();

  },[])

  const getAllContractors = () => {
    ContractorService.getAllContractors().then((response) => {
        console.log(response.data);
        setcontractor(response.data)
      
    }).catch(error =>{
        console.log(error);
    })
}


  const deleteContractor = (contractorId) => {
    console.log(".........cide is .....")
    console.log(contractorId)
    ContractorService.deleteContractor(contractorId).then((response) =>{
     getAllContractors();

    }).catch(error =>{
        console.log(error);
    })
     
 }

  return (
    <div className="container">
      <h2 className="text-center">Contractor List</h2>
      <Link to="/add-contractor" className="btn btn-primary mb-2">Add Employee</Link>
      <table className="table table-bordered table-striped">
        <thead>
      <tr>  
          <th>Id</th>
          <th>Email</th>
          <th>Mobile No</th>
          <th>Username</th>
          <th>Password</th>
          <th> Actions </th>
          </tr>
          </thead>
        <tbody>
          {
              contractor.map(contractor =>
                <tr key={contractor.id}>
                 
                  <td>{contractor.id}</td>
                  <td>{contractor.email}</td>
                  <td>{contractor.mobile}</td>
                  <td>{contractor.username}</td>
                  <td>{contractor.password}</td>
                  <td>
                      <Link className="btn btn-info" to={`/edit-contractor/${contractor.id}`} >Update</Link>
                      <button className = "btn btn-danger" onClick = {() => deleteContractor(contractor.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                      </td>
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListContractorsComponent