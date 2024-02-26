import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
 


const ContractorHeaderComponent = () => {
	const navigate=useNavigate();
    return(
    
			
			<header class="header header-fixheight header--fixed">
				<div class="container">
					<div class="header__inner">
					<div className="header-logo"><a href="/"><img src="assets/img/p13.png" alt="image not found " height="400" width="400" /></a></div>
						
					
						<nav class="raising-nav">
							
				
							<ul class="raising-menu">
								
								<li>
								<a href="#id2">Profile</a>
								
								</li>
								<li>
								<a href="#id3">Projects</a>
								
								</li>
								<li>
								<a href="#id4">Feedback</a>
								
								</li>
								<li>
								<a className="text-grey" style={{cursor:"pointer"}} onClick={()=>{
									sessionStorage.removeItem("user")
									navigate("/")
									toast.success("Logged out succesfully")
								}}>Logout</a>
								</li>
							</ul>
							
							<div class="navbar-toggle"><i class="fa fa-bars"></i></div>
						</nav>
						
					</div>
				</div>
			</header>
  
    )
}

export default ContractorHeaderComponent;