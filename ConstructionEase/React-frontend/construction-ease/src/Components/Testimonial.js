import React from "react"

const TestimonialComponent = () => {

    return(

      <section className="md-section" id="id5">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
        {/* sec-title */}
        <div className="sec-title sec-title__lg-title md-text-center">
          <h2 className="sec-title__title">Feedback</h2>
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
            <p>Nam suscipit nisi risus, et porttitor metus molestie a. Phasellus id quam id turpis suscipit pretium. Maecenas ultrices, lacus ut accumsan maximus, odio augue rhoncus augue,</p>
          </blockquote>
          {/* End / quote */}


          {/* authorbox */}
          <div className="authorbox">
            <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}><img src="https://unsplash.it/800" alt="" /></div>
            <div className="authorbox__info">
              <h5 className="authorbox__name">Raymond Mendoza</h5>
              <p className="authorbox__work">Developer</p>
            </div>
          </div>
          {/* End / authorbox */}

        </div>
        <div className="testimonial-item">

          {/* quote */}
          <blockquote className="quote">
            <p>Maecenas lorem ex, euismod eget pulvinar non, facilisis ut leo. Quisque placerat purus in neque efficitur ornare. Nam at justo magna. Aliquam venenatis odio ante, non euismod augue</p>
          </blockquote>
          {/* End / quote */}


          {/* authorbox */}
          <div className="authorbox">
            <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}><img src="https://unsplash.it/800" alt="" /></div>
            <div className="authorbox__info">
              <h5 className="authorbox__name">Bruce Powell</h5>
              <p className="authorbox__work">Developer</p>
            </div>
          </div>
          {/* End / authorbox */}

        </div>
        <div className="testimonial-item">

          {/* quote */}
          <blockquote className="quote">
            <p>Integer placerat ullamcorper urna nec rhoncus. Sed velit justo, lacinia non sapien imperdiet, sagittis fringilla risus. Nulla in est lobortis massa consectetur scelerisque. Etiam</p>
          </blockquote>
          {/* End / quote */}


          {/* authorbox */}
          <div className="authorbox">
            <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}><img src="https://unsplash.it/800" alt="" /></div>
            <div className="authorbox__info">
              <h5 className="authorbox__name">Maria Gutierrez</h5>
              <p className="authorbox__work">Support</p>
            </div>
          </div>
          {/* End / authorbox */}

        </div>
        <div className="testimonial-item">

          {/* quote */}
          <blockquote className="quote">
            <p>Mauris lacinia venenatis dolor sit amet viverra. Integer malesuada nulla neque. Sed rutrum ligula eu sagittis volutpat. Aliquam erat volutpat. Praesent mattis non nulla eget</p>
          </blockquote>
          {/* End / quote */}


          {/* authorbox */}
          <div className="authorbox">
            <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}><img src="https://unsplash.it/800" alt="" /></div>
            <div className="authorbox__info">
              <h5 className="authorbox__name">Brittany Williams</h5>
              <p className="authorbox__work">Developer</p>
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