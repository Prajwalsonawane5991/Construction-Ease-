import React from "react"
import { NavLink } from "react-router-dom"

const ContractorHeaderComponent = () => {

    return(
    
			
			<header class="header header-fixheight header--fixed">
				<div class="container">
					<div class="header__inner">
					<div className="header-logo"><a href="/"><img src="assets/img/p13.png" alt="image not found " height="400" width="400" /></a></div>
						
					
						<nav class="raising-nav">
							
				
							<ul class="raising-menu">
								<li><a href="#id3">Home</a>
								</li>
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
								<a href="/">Logout</a>
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