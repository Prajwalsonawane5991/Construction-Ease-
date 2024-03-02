import React, { useEffect } from "react"
import PlansComponent from "./PlansComponent"
import AboutComponent from "./AboutComponent"
import TestimonialComponent from "./Testimonial"
import TeamComponent from "./Team"
import ContactusComponent from "./Contactus"
import HeaderComponent from "./HeaderComponent"
import HomeComponent from "./HomeComponent"
import  { useState } from 'react';
import ClientHeaderComponent from "./ClientHeader"
// import GalleryComponent from "./GalleryComponent"


const LayoutComponent = (props) => {

    const [cid, setCid] = useState('');

    useEffect(()=>{
        console.log('id in layout',cid);
        setCid(props.id);
    }, [props.id]);


    return(

        <div>
 
            <div class="page-wrap">
             <div class="md-content">
             
                {cid ? <ClientHeaderComponent id={cid}></ClientHeaderComponent> :<HeaderComponent></HeaderComponent>}
                
                
                <HomeComponent></HomeComponent>
                {/* <GalleryComponent></GalleryComponent> */}
                  <PlansComponent id={cid}></PlansComponent>
                  
                  <AboutComponent></AboutComponent>
                  
                 
                  <TestimonialComponent></TestimonialComponent>
                

                  <ContactusComponent></ContactusComponent>
                    
            </div>
            </div>
        </div>
        
    )
}

export default LayoutComponent