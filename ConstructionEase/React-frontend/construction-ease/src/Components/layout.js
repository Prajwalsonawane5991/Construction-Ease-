import React from "react"
import PlansComponent from "./PlansComponent"
import AboutComponent from "./AboutComponent"
import TestimonialComponent from "./Testimonial"
import TeamComponent from "./Team"
import ContactusComponent from "./Contactus"
import HeaderComponent from "./HeaderComponent"
import HomeComponent from "./HomeComponent"
// import GalleryComponent from "./GalleryComponent"


const LayoutComponent = () => {

    return(

        <div>

            <div class="page-wrap">
             <div class="md-content">
             
                <HeaderComponent></HeaderComponent>
                <HomeComponent></HomeComponent>
                {/* <GalleryComponent></GalleryComponent> */}
                  <PlansComponent></PlansComponent>
                  
                  <AboutComponent></AboutComponent>
                  
                 
                  <TestimonialComponent></TestimonialComponent>
                  <TeamComponent></TeamComponent>

                  <ContactusComponent></ContactusComponent>
                    
            </div>
            </div>
        </div>
        
    )
}

export default LayoutComponent