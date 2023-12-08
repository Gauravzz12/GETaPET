
import React from 'react';
import { Link } from 'react-router-dom';
export default function LoginPage() {
    return (
        <div>
            {/* bg-color #9A616D*/}
            <section className="vh-100" style={{ backgroundColor: 'white' }}>
                <div className="container py-5 h-100" style={{ marginTop:'-50px',height:'80vh'}}>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-6 col-lg-5">
                            {/* Image Section */}
                            <img src="./images/loginPageImage.jpg" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height: '80vh', width: '100%',marginBottom:'150px' }} />
                        </div>

                        <div className="col-md-6 col-lg-7">
                            {/* Form Section */}
                            {/* style={{ borderRadius: '0 1rem 1rem 0' }} */}
                            <div className="card h-100" >
                                <div className="card-body p-4 p-lg-5 text-black d-flex align-items-center" style={{marginTop:'-140px'}}>
                                    <form className="w-100">
                                        <div className="text-center mb-5">
                                            <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                            <img
                                                alt="GETaPET-LOGO"
                                                src="/images/Logo.jpg"
                                                width="100"
                                                height="100"
                                                padding="-10px"
                                                className="d-inline-block align-top"
                                            />
                                        </div>

                                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>WELCOME BACK !</h5>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form2Example17">Email address</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form2Example27">Password</label>
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                        </div>

                                        <p className="mb-2" style={{ color: '#393f81', textAlign: 'center' }}>Forgot password? Don't have an account? 
                                             <Link to="/Register" style={{ color: '#393f81' }}>
                                             Register here
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );}
