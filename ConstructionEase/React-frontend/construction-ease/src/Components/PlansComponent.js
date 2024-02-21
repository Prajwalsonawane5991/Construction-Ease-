import React from "react"
import { Link } from 'react-router-dom';

const PlansComponent = () => {

    return(

      <div>
  <section class="md-section" id="id">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
          <div class="sec-title sec-title__lg-title md-text-center">
            <h2 class="sec-title__title">Our Plans</h2><span class="sec-title__divider"></span>
          </div>
        </div>
      </div>

      <div class="row row-eq-height">
        <div class="col-sm-6 col-md-6 col-lg-4 ">
          <div class="services">
            <div class="services__img"><img src="assets/img/service/1.jpg" alt=""/></div>
            <h2 class="services__title"><a href="/regularPlans">Regular Plans</a></h2>
            <div class="services__desc">Curabitur elementum urna augue, eu porta purus gravida in. Cras consectetur, lorem a cursus vestibulum, ligula purus</div>
            <a class="btn  btn-outline-primary btn-custom"> <Link to="/ExplorePlans/Regular">Regular Plans</Link></a>
          </div>
        </div>

        <div class="col-sm-6 col-md-6 col-lg-4 ">
          <div class="services">
            <div class="services__img"><img src="assets/img/service/2.jpg" alt=""/></div>
            <h2 class="services__title"><a href="/silverPlans">Silver Premium Plans</a></h2>
            <div class="services__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet ut lacus a tincidunt. Quisque luctus nibh augue, non</div>
            <a class="btn  btn-outline-primary btn-custom"> <Link to="/ExplorePlans/Silver Premium">Silver Premium </Link></a>
          </div>
        </div>

        <div class="col-sm-6 col-md-6 col-lg-4 ">
          <div class="services">
            <div class="services__img"><img src="assets/img/service/3.jpg" alt=""/></div>
            <h2 class="services__title"><a href="/goldPlans">Gold Premium plans</a></h2>
            <div class="services__desc">Duis porttitor libero ac egestas euismod. Maecenas quis felis turpis. Nulla quis turpis sed augue egestas dapibus vel at</div>
            <a class="btn  btn-outline-primary btn-custom"> <Link to="/ExplorePlans/Gold Premium">Gold Premium</Link></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}

export default PlansComponent;