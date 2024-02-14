import React, { useEffect } from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink, Outlet } from 'react-router-dom';


export default function SideBarComponent() {
  return (
    <div className='container-fluid ms-0 px-0 '>
      <div className='row holder'>
        <div className='col-1 '>
          <CDBSidebar textColor="#fff" backgroundColor="#333" toggled className='sidebar-main' >
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              Menu  
            </CDBSidebarHeader>
           
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/dashboard" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dashboard/user" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table">User List</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dashboard/contractor" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table">Contractor List</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dashboard/upayment" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">UserPayments</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dashboard/cpayment" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">ContractorPayments</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="sticky-note">UserFeedbacks</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="sticky-note">ContractorFeedbacks</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
        <div className='offset-1 col-10 offset-md-0 col-md-11 offset-lg-0 col-lg-11'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};