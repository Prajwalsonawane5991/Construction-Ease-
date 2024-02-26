

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
