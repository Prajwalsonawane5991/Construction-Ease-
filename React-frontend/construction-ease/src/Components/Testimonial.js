import React from "react"

const TestimonialComponent = () => {

    return(

      <section className="md-section" id="id5">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
        {/* sec-title */}
        <div className="sec-title sec-title__lg-title md-text-center">
          <h2 className="sec-title__title">Testimonial</h2>
          <span className="sec-title__divider"></span>
        </div>
        {/* End / sec-title */}
      </div>
    </div>

    {/* swiper swiper-container */}
    <div className="swiper swiper-container" data-options='{"slidesPerView":3,"spaceBetween":30,"breakpoints":{"600":{"slidesPerView":1},"991":{"slidesPerView":2,"spaceBetween":30}}}'>
      <div className="swiper-wrapper">
        <div className="testimonial-item">

          {/* quote */}
          <blockquote className="quote">
            <p>In the realm of construction, simplicity is the cornerstone of innovation. By embracing the principles of ease, we transform complex blueprints into tangible structures, where every brick laid is a testament to our commitment to making construction effortless.</p>
          </blockquote>
          {/* End / quote */}


          {/* authorbox */}
          <div className="authorbox">
            <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}><img src="https://unsplash.it/800" alt="" /></div>
            <div className="authorbox__info">
              <h5 className="authorbox__name">Yasir Shaikh</h5>
              <p className="authorbox__work">Developer</p>
            </div>
          </div>
          {/* End / authorbox */}

        </div>
        <div className="testimonial-item">

          {/* quote */}
          <blockquote className="quote">
            <p>Construction, at its core, is about more than just bricks and mortar; it's about the seamless integration of vision and execution. With a focus on ease, we navigate the intricacies of every project, ensuring that each phase flows effortlessly towards the realization of our clients' dreams.</p>
          </blockquote>
          {/* End / quote */}


          {/* authorbox */}
          <div className="authorbox">
            <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}><img src="https://unsplash.it/800" alt="" /></div>
            <div className="authorbox__info">
              <h5 className="authorbox__name">Prajwal Sonawane</h5>
              <p className="authorbox__work">Developer</p>
            </div>
          </div>
          {/* End / authorbox */}

        </div>
        <div className="testimonial-item">

          {/* quote */}
          <blockquote className="quote">
            <p>Embarking on a construction journey is akin to navigating uncharted waters. Yet, with a steadfast commitment to ease, we chart a course that transforms challenges into opportunities and complexities into simplicity. In our hands, every project becomes a testament to the art of construction made easy.</p>
          </blockquote>
          {/* End / quote */}


          {/* authorbox */}
          <div className="authorbox">
            <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}><img src="https://unsplash.it/800" alt="" /></div>
            <div className="authorbox__info">
              <h5 className="authorbox__name">Tushar Patle</h5>
              <p className="authorbox__work">Support</p>
            </div>
          </div>
          {/* End / authorbox */}

        </div>
        <div className="testimonial-item">

          {/* quote */}
          <blockquote className="quote">
            <p>In the tapestry of construction, ease is the thread that binds innovation and efficiency. With every blueprint we unfold and every foundation we lay, we strive to simplify the construction process, ensuring that our projects not only stand tall but also stand as a testament to the power of ease in building.</p>
          </blockquote>
          {/* End / quote */}


          {/* authorbox */}
          <div className="authorbox">
            <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}><img src="https://unsplash.it/800" alt="" /></div>
            <div className="authorbox__info">
              <h5 className="authorbox__name">Vyanktesh Mohite</h5>
              <p className="authorbox__work">Administrator</p>
            </div>
          </div>
          {/* End / authorbox */}

        </div>
      </div>
    </div>
    {/* End / swiper swiper-container */}

  </div>
</section>

    )
}

export default TestimonialComponent;