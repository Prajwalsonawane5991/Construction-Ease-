// import React from 'react'
// import one from "../assets/img/slider/1.jpg";
// import two from "../assets/img/slider/2.jpg";
// import three from "../assets/img/slider/3.jpg";
// import four from "../assets/img/slider/4.jpg";
// import '../Home.css'

// function HomeComponent() {
//     return (
//         <div>
//             <title>Home</title>
//             <div className="page-wrap">
//                 <div className="md-content">
//                     <hero className="hero" id="id1">
//                         <div className="swiper swiper-container">
//                             <div className="swiper-wrapper">
//                                 <div  className="hero__wrapper ">
//                                     <div className="hero__inner">
//                                         <div class="container">
//                                             <h1 class="hero__title">Home transformations start with collaboration.</h1>
//                                             <p class="hero__desc">Bringing expertise and passion together for exceptional results</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="hero__wrapper" style={{"background-image": `url(${two}))`}}>
//                                     <div class="hero__inner">
//                                         <div class="container">
//                                             <h1 class="hero__title">Build Your Dream Home</h1>
//                                             <p class="hero__desc">Where homeowners and contractors unite to create beautiful spaces.</p>



//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="hero__wrapper" style={{"background-image": `url("${three}"))`}}>
//                                     <div class="hero__inner">
//                                         <div class="container">
//                                             <h1 class="hero__title">Joining forces to turn dreams into addresses.</h1>
//                                             <p class="hero__desc">Together, we're redefining home improvement.</p>




//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="hero__wrapper" style={{"background-image": `url(${four}))`}}>
//                                     <div class="hero__inner">
//                                         <div class="container">
//                                             <h1 class="hero__title">How to Create and Manage SVG Sprites</h1>
//                                             <p class="hero__desc">Nam suscipit nisi risus, et porttitor metus molestie a. Phasellus id quam id turpis suscipit</p>




//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="swiper-pagination-custom"></div>
//                             <div class="swiper-button-custom">
//                                 <div class="swiper-button-prev-custom"><i class="fa fa-angle-left"></i></div>
//                                 <div class="swiper-button-next-custom"><i class="fa fa-angle-right"></i></div>
//                             </div>
//                         </div>

//                     </hero>


//                     <div class="cta-02">
//                         <div class="container">
//                             <div class="row">
//                                 <div class="col-lg-9 ">

//                                 </div>
//                                 <div class="col-lg-3  md-text-right">



//                                 </div>
//                             </div>
//                         </div>
//                     </div>





//                     <section class="md-section" id="id4" style={{"background-color":"#fff"}}>
//                         <div class="container">
//                             <div class="row">
//                                 <div class="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">


//                                     <div class="sec-title sec-title__lg-title md-text-center">
//                                         <h2 class="sec-title__title">Past Projects</h2><span class="sec-title__divider"></span>
//                                     </div>
//                                 </div>
//                             </div>


//                             <div class="gallery-wrap gallery-album">
//                                 <div class="grid-css grid-css--grid" data-col-lg="4" data-col-md="2" data-col-sm="2" data-col-xs="1" data-gap="30">
//                                     <div class="grid__inner">
//                                         <div class="grid-sizer"></div>


//                                         <div class="grid-item large">
//                                             <div class="grid-item__inner">
//                                                 <div class="grid-item__content-wrapper">


//                                                     <div class="gallery gallery--grid">
//                                                         <div class="gallery__image bg-image" >
//                                                             <img src={one} alt="How to Create and" /><a class="gallery__overlay mfp-image" href="assets/img/gallery/9.jpg" data-effect="mfp-zoom-in" title="Design a Perfect">
//                                                             <div class="md-tb">
//                                                                 <div class="md-tb__cell md-text-center"><i class="fa fa-search"></i></div>
//                                                             </div></a>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>



//                                         <div class="grid-item wide">
//                                             <div class="grid-item__inner">
//                                                 <div class="grid-item__content-wrapper">


//                                                     <div class="gallery gallery--grid">
//                                                         <div class="gallery__image bg-image" style={{"background-image": "url(assets/img/gallery/10.jpg);"}}>
//                                                             <img src="assets/img/gallery/10.jpg" alt="How to Master" /><a class="gallery__overlay mfp-image" href="assets/img/gallery/10.jpg" data-effect="mfp-zoom-in" title="Using Memes in Your">
//                                                             <div class="md-tb">
//                                                                 <div class="md-tb__cell md-text-center"><i class="fa fa-search"></i></div>
//                                                             </div></a>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>



//                                         <div class="grid-item">
//                                             <div class="grid-item__inner">
//                                                 <div class="grid-item__content-wrapper">


//                                                     <div class="gallery gallery--grid">
//                                                         <div class="gallery__image bg-image" style={{"background-image": "url(assets/img/gallery/11.jpg);"}}>
//                                                             <img src="assets/img/gallery/11.jpg" alt="7 UI Choices That" /><a class="gallery__overlay mfp-image" href="assets/img/gallery/11.jpg" data-effect="mfp-zoom-in" title="Free PSD Files">
//                                                             <div class="md-tb">
//                                                                 <div class="md-tb__cell md-text-center"><i class="fa fa-search"></i></div>
//                                                             </div></a>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>



//                                         <div class="grid-item">
//                                             <div class="grid-item__inner">
//                                                 <div class="grid-item__content-wrapper">


//                                                     <div class="gallery gallery--grid">
//                                                         <div class="gallery__image bg-image abcd" >
//                                                             <img src={two} alt="Using Memes in Your" /><a class="gallery__overlay mfp-image" href="assets/img/gallery/12.jpg" data-effect="mfp-zoom-in" title="Is UX Really That">
//                                                             <div class="md-tb">
//                                                                 <div class="md-tb__cell md-text-center"><i class="fa fa-search"></i></div>
//                                                             </div></a>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>



//                                         <div class="grid-item">
//                                             <div class="grid-item__inner">
//                                                 <div class="grid-item__content-wrapper">


//                                                     <div class="gallery gallery--grid">
//                                                         <div class="gallery__image bg-image" style={{"background-image": "url('./assets/img/slider/3.jpg');"}}>
//                                                             <img src="assets/img/gallery/13.jpg" alt="How To Build A" /><a class="gallery__overlay mfp-image" href="assets/img/gallery/13.jpg" data-effect="mfp-zoom-in" title="Free Sketch Plugins">
//                                                             <div class="md-tb">

//                                                                 <div class="md-tb__cell md-text-center"><i class="fa fa-search"></i></div>
//                                                             </div></a>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>



//                                         <div class="grid-item">
//                                             <div class="grid-item__inner">
//                                                 <div class="grid-item__content-wrapper">


//                                                     <div class="gallery gallery--grid">
//                                                         <div class="gallery__image bg-image" style={{"background-image": "url(assets/img/gallery/14.jpg);"}}>
//                                                             <img src="assets/img/gallery/14.jpg" alt="Using Memes in Your" /><a class="gallery__overlay mfp-image" href="assets/img/gallery/14.jpg" data-effect="mfp-zoom-in" title="How to Create and">
//                                                             <div class="md-tb">
//                                                                 <div class="md-tb__cell md-text-center"><i class="fa fa-search"></i></div>
//                                                             </div></a>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>



//                                         <div class="grid-item large">
//                                             <div class="grid-item__inner">
//                                                 <div class="grid-item__content-wrapper">


//                                                     <div class="gallery gallery--grid">
//                                                         <div class="gallery__image bg-image" style={{"background-image": "url(assets/img/gallery/1.jpg);"}}>
//                                                             <img src="assets/img/gallery/1.jpg" alt="Is UX Really That" /><a class="gallery__overlay mfp-image" href="assets/img/gallery/1.jpg" data-effect="mfp-zoom-in" title="How to Master">
//                                                             <div class="md-tb">
//                                                                 <div class="md-tb__cell md-text-center"><i class="fa fa-search"></i></div>
//                                                             </div></a>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>



//                                         <div class="grid-item wide">
//                                             <div class="grid-item__inner">
//                                                 <div class="grid-item__content-wrapper">


//                                                     <div class="gallery gallery--grid">
//                                                         <div class="gallery__image bg-image" style={{"background-image": "url(assets/img/gallery/2.jpg);"}}>
//                                                             <img src="assets/img/gallery/2.jpg" alt="Getting Started with" /><a class="gallery__overlay mfp-image" href="assets/img/gallery/2.jpg" data-effect="mfp-zoom-in" title="The Essential Guide">
//                                                             <div class="md-tb">
//                                                                 <div class="md-tb__cell md-text-center"><i class="fa fa-search"></i></div>
//                                                             </div></a>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>

//                         </div>

//                     </section>


//                     <div id="root">
//                     </div>



//                 </div>		</div>
//             <script type="text/javascript" src="assets/vendors/jquery/jquery.min.js"></script>
//             <script type="text/javascript" src="assets/vendors/imagesloaded/imagesloaded.pkgd.js"></script>
//             <script type="text/javascript" src="assets/vendors/isotope-layout/isotope.pkgd.js"></script>
//             <script type="text/javascript" src="assets/vendors/jquery.matchHeight/jquery.matchHeight.min.js"></script>
//             <script type="text/javascript" src="assets/vendors/magnific-popup/jquery.magnific-popup.min.js"></script>
//             <script type="text/javascript" src="assets/vendors/masonry-layout/masonry.pkgd.js"></script>
//             <script type="text/javascript" src="assets/vendors/swiper/swiper.jquery.js"></script>
//             <script type="text/javascript" src="assets/vendors/jquery-one-page/jquery.nav.js"></script>
//             <script type="text/javascript" src="assets/vendors/menu/menu.js"></script>
//             <script type="text/javascript" src="assets/vendors/jquery.waypoints/jquery.waypoints.min.js"></script>

//             <script type="text/javascript" src="assets/js/main.js"></script>



//         </div>

//     )
// }

// export default HomeComponent;

import React from 'react'
import one from "../assets/img/slider/1.jpg";
import two from "../assets/img/slider/2.jpg";
import three from "../assets/img/slider/3.jpg";


function HomeComponent() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide"  data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={one} className="d-block w-100" width="600px" height="1000px" style={{maxHeight:"78vh"}} alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="hero__title">Home transformations start with collaboration.</h1>
                        <p className="hero__desc">Bringing expertise and passion together for exceptional results</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={two} className="d-block w-100" width="600px" height="1000px" style={{maxHeight:"78vh"}} alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="hero__title">Joining forces to turn dreams into addresses.</h1>
                        <p className="hero__desc">Together, we're redefining home improvement.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={three} className="d-block w-100" width="600px" height="1000px" style={{maxHeight:"78vh"}} alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="hero__title">Build Your Dream Home</h1>
                        <p className="hero__desc">Where homeowners and contractors unite to create beautiful spaces.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default HomeComponent;
