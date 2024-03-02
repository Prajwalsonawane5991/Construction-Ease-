import React, { useEffect, useState } from 'react';
import ClientService from '../Services/ClientService';
import AdminHeaderComponent from './AdminHeader';

const ClientsPaymentListComponent = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getAllClients();
  }, []);

  const getAllClients = () => {
    ClientService.getAllClients()
      .then((response) => {
        console.log(response.data);
        setClients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMarkAsPaid = (clientId) => {
    // Update the status of the client in the database based on the isChecked value
    
    ClientService.updateClientStatus(clientId)
      .then(() => {
        // Refresh the client list
        getAllClients();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div style={{ marginTop: "80px",marginBottom:"0px",backgroundImage: `url(${require('./demo.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'whitesmoke',
    padding: '100px' }}> 

    <section style={{ marginTop: "140px",marginBottom:"390px" }}>
    <AdminHeaderComponent></AdminHeaderComponent>
      <br></br>
      <div className="container" >
        <h2 className="text-center">Client's Payment List</h2>
        <br></br>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Username</th>
              <th>Password</th>
              <th>Mark as Paid</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.email}</td>
                <td>{client.mobile}</td>
                <td>{client.username}</td>
                <td>{client.password}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={client.status}
                    
                    onChange={(e) => handleMarkAsPaid(client.id, e.target.checked)}
                  />
                  <span
    style={{
        display: 'inline-block',
        width: '40px',
        height: '20px',
        border: '1px solid #47b475', // Green border color
        borderRadius: '5px',
        backgroundColor: client.status ? '#47b475' : 'transparent', // Green background color when checked
        marginLeft: '15px',
        textAlign: 'center',
        color: '#fff', // White checkmark color
        fontSize: '12px',
        lineHeight: '14px',
    }}
>
    {client.status && <span>paid</span>} {/* Render checkmark only when checked */}
</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
</div>

  );
};

export default ClientsPaymentListComponent;
