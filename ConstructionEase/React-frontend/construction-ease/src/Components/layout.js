import React from "react"
import HeaderComponent from "./header"

import AboutComponent from "./about"
import GalleryComponent from "./gallery"
import TestimonialComponent from "./Testimonial"
import TeamComponent from "./Team"
import ContactusComponent from "./Contactus"
import FooterComponent from "./footer"
import PlansComponent from "./PlansComponent"
import AddContractorComponent from "./AddContractorComponent"

const LayoutComponent = () => {

    return(

        <div>
				<div class="preload" id="preload">
					<div class="cssload-spin-box"></div>
		        </div>

            <div class="page-wrap">
            <HeaderComponent></HeaderComponent>
             <div class="md-content">

                  <PlansComponent></PlansComponent>
                  
                  <AboutComponent></AboutComponent>
                 
                  <TestimonialComponent></TestimonialComponent>
                  <TeamComponent></TeamComponent>
                  <ContactusComponent></ContactusComponent>
                    
            </div>
              <FooterComponent></FooterComponent>
            </div>
        </div>
        
    )
}

export default LayoutComponent