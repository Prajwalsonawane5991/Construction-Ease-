import React from "react"

const AboutComponent = () => {

    return(
      <>
      <div>
      <section className="md-section" id="id2" style={{ backgroundColor: "#fff", padding: "60px 0" }}>

					<div class="container">
						<div class="row">
							<div class="col-lg-6 ">
								<div class="mb-30">
                    <div class="sec-title sec-title__lg-title">
                      <h2 class="sec-title__title">About <span>The Raising</span></h2><span class="sec-title__divider"></span>
                    </div>
									
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><br></br>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p><br></br><a class="btn btn-primary btn-outline" href="#">More about us</a>
								</div>
							</div>

							<div class="col-lg-6 ">
								  <div class="about"><img src="assets/img/about/2.jpg" alt=""/>
									
						
                    <blockquote class="quote-02 about-quote">
                      <p class="quote-02__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet ut lacus a tincidunt. Quisque luctus nibh augue, non ultrices arcu molestie in. Integer finibus dolor lorem, tempor pretium lectus</p>
                      
                  
                      <div className="authorbox">
  <div className="authorbox__avartar" style={{ backgroundImage: "url(https://unsplash.it/800)" }}><img src="https://unsplash.it/800" alt="" /></div>
  <div className="authorbox__info">
    <h5 className="authorbox__name">Maria Gutierrez</h5>
    <p className="authorbox__work">Designer</p>
  </div>
  
</div>

                      
                    </blockquote>
									
								  </div>
							</div>

						</div>
					</div>
				</section>
      </div>
      </>
    )
}

export default AboutComponent
