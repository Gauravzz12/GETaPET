import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Adopt() {
  return (
      <div>
            
          <section className="vh-100 bg-image"
            style={{}}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{borderRadius: '15px'}}>
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">PET ADOPTION FORM</h2>

                        <form >

                          <div className="form-outline mb-4">
                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder=''/>
                            <label className="form-label" for="form3Example1cg">Name</label>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="email" id="form3Example3cg" className="form-control form-control-lg "placeholder='abc@gmail.com' />
                            <label className="form-label" for="form3Example3cg">Email</label>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="number" id="form3Example4cg" className="form-control form-control-lg" placeholder='+91 1234567890'/>
                            <label className="form-label" for="form3Example4cg">Contact Number</label>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder=''/>
                            <label className="form-label" for="form3Example4cdg">Pet's Name</label>
                          </div>
                          <div className="form-outline mb-4">
                            <input type="text" id="form3Example4cdg" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example4cdg">Pet's ID</label>
                          </div>
                          <div className="form-outline mb-4">
                            <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example4cdg">PASSWORD</label>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" for="form2Example3g">
                              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center">
                          <Button variant="primary" >
          Submit Adoption Request
        </Button>
        </div>

                          <p className="text-center text-muted mt-5 mb-0">Have already an account? 
                             
                              <Link to="/Login" className="fw-bold text-body">
                                <u> Login Here</u>
                              </Link>
                          </p>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        

      </div>
  )     
}

export default Adopt;