import React from 'react';
import '../styles/styles.css';

function Home() {
  return (
   <>
      <div className='Home-Content'>
          <div className='image-overlay'></div>
          <img src='images/Home-Background.jpeg' className='Home-img' alt='HomeImage'/>
          <div className='centered-text'>
            <h1>Bringing Joy Home, Where Love Finds a Tail !</h1>
          </div>
        </div>





           <div className="container bootstrap snippets bootdey" id="aboutSection" >
           <section  className="current">
               <div className="services-top">
                   <div className="container bootstrap snippets bootdey">
                       <div className="row text-center">
                           <div className="col-sm-12 col-md-12 col-md-12">
                               <h2>Find Your Buddy Today !</h2>
                               <h2 style={{fontSize: '60px',lineHeight: '60px',marginBottom: '20px',fontWeight: '900'}}>Our Services</h2>
                               <p>help them find their <span className="highlight">fur-ever</span>  <span className="highlight"></span> home.</p>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-md-offset-1 col-sm-12 col-md-12 col-md-10">
                               <div className="services-list">
                                   <div className="row">
                                       <div className="col-sm-6 col-md-4 col-md-4">
                                           <div className="service-block" style={{visibility: 'visible'}}>
                                               <div className="ico fa fa-magic highlight"></div>
                                               <div className="text-block">
                                                   <div className="name">PET ADOPTION</div>
                                                   {/* <div className="info">Beauty and function</div> */}
                                                   <div className="text">Display available pets for adoption with detailed profiles including images, descriptions, breed information, age, and health status. </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-sm-6 col-md-4 col-md-4">
                                           <div className="service-block" style={{visibility: 'visible'}}>
                                               <div className="ico fa fa-code highlight"></div>
                                               <div className="text-block">
                                                   <div className="name">VOLUNTEERING OPTIONS</div>
                                                   {/* <div className="info">Quality code that lasts</div> */}
                                                   <div className="text">Encourage visitors to contribute to the cause by offering volunteer opportunities or accepting donations for the care of pets. </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-sm-6 col-md-4 col-md-4">
                                           <div className="service-block" style={{visibility: 'visible'}}>
                                               <div className="ico fa fa-pencil highlight"></div>
                                               <div className="text-block">
                                                   <div className="name">PET PROFILES AND HISTORY</div>
                                                   {/* <div className="info">Words that tell your story</div> */}
                                                   <div className="text">Provide comprehensive pet profiles that include behavioral traits, health records, vaccinations, and any special needs or training requirements. </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-sm-6 col-md-4 col-md-4">
                                           <div className="service-block" style={{visibility: 'visible'}}>
                                               <div className="ico fa fa-bullhorn highlight"></div>
                                               <div className="text-block">
                                                   <div className="name">COMMUNITY </div>
                                                   {/* <div className="info">Converting users to customers</div> */}
                                                   <div className="text">Establish a platform for pet owners and adopters to connect, share experiences, seek advice, and provide support.</div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-sm-6 col-md-4 col-md-4">
                                           <div className="service-block" style={{visibility: 'visible'}}>
                                               <div className="ico fa fa-eye highlight"></div>
                                               <div className="text-block">
                                                   <div className="name">FIND YOUR LOST PET'S</div>
                                                   {/* <div className="info">Leave a lasting impression</div> */}
                                                   <div className="text">Enabling users to post information about missing pets or report found animals. </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-sm-6 col-md-4 col-md-4">
                                           <div className="service-block" style={{visibility: 'visible'}}>
                                               <div className="ico fa fa-umbrella highlight"></div>
                                               <div className="text-block">
                                                   <div className="name">EDUCATIONAL RESOURCES</div>
                                                   {/* <div className="info">Thinking beyond tomorrow</div> */}
                                                   <div className="text">Offer educational content about pet care, behavior training, grooming, feeding, and overall pet wellness. </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
         </div>


         {/* FOOTER SECTION */}
         
              <footer class="text-center text-lg-start bg-body-tertiary text-muted">
               
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                 
                  <div class="me-5 d-none d-lg-block">
                    <span>CONNECT WITH US NOW !</span>
                  </div>
                  
                  <div>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                  
                </section>
                

                
                <section class="">
                  <div class="container text-center text-md-start mt-5">
                    
                    <div class="row mt-3">
                      
                      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        
                        <h6 class="text-uppercase fw-bold mb-4">
                          <i class="fas fa-gem me-3"></i>GETaPET
                        </h6>
                        <p>
                        "Bringing Joy Home: Where Love Finds a Tail"
                        </p>
                      </div>
                      
                      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      
                        <h6 class="text-uppercase fw-bold mb-4">
                          LINKS
                        </h6>
                        <p>
                          <a href="#!" class="text-reset">INSTAGRAM</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">FACEBOOK</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">YOUTUBE</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">THREADS</a>
                        </p>
                      </div>
                      
                      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                       
                        <h6 class="text-uppercase fw-bold mb-4">
                          KNOW MORE
                        </h6>
                        <p>
                          <a href="#!" class="text-reset">How to train your pet?</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Best diet for your pet?</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Find right surroundings</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">How to keep your pet healthy?</a>
                        </p>
                      </div>
                     
                      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      
                        <h6 class="text-uppercase fw-bold mb-4">Contact us</h6>
                        <p><i class="fas fa-home me-3"></i> INDIA</p>
                        <p>
                          <i class="fas fa-envelope me-3">
                          <a href="#!" class="text-reset"> getApet@gmail.com</a>
                         
                          </i>
                          
                        </p>
                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                      </div>
                      
                    </div>
                 
                  </div>
                </section>
               

              
                <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                  © 2023 Copyright:
                  <a class="text-reset fw-bold" href="">GETaPET</a>
                </div>
               
              </footer>
           



       </>
  );
}

export default Home;