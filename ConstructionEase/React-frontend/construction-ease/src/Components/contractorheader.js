import React from "react"

const ContractorHeaderComponent = () => {

    return(
            	
			<header class="header header-fixheight header--fixed">
				<div class="container">
					<div class="header__inner">
						<div class="header-logo"><a href="home.html"><img src="assets/img/logo_white.png" alt=""/></a></div>
						
					
						<nav class="raising-nav">
							
				
							<ul class="raising-menu">
								<li class="current"><a href="#id1">Home</a>
								</li>
			
								<li><a href="#id2">Profile</a>
								</li>
								<li><a href="/Projects">Project</a>
								</li>
							</ul>
							
							<div class="navbar-toggle"><i class="fa fa-bars"></i></div>
						</nav>
						
						<div class="btn-right">
							<div class="search-btn"><i class="fa fa-search"></i></div>
						</div>
						<div class="searchbar">
							<div class="searchbar__group"><span class="searchbar__addon"><i class="fa fa-search"></i></span>
								<input class="searchbar__input" type="text" name="search" value="" placeholder="Search"/><span class="searchbar__close"></span>
							</div>
						</div>
					</div>
				</div>
			</header>
  
    )
}

export default ContractorHeaderComponent