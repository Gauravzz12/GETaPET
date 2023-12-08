
import React from 'react';

export default function RegisterPage() {
    return (
        <div>
           {/* name,email,contact no.2,create pass,I agree to conditions(required),submit */}
            <div className="card h-100" style={{height:'100px'}} >
                <div className="card-body p-4 p-lg-5 text-black d-flex align-items-center" style={{marginTop:'-50px'}}>
                    <form className="w-100">
                        <div className="text-center mb-5">
                            <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                            
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>REGISTER NOW !</h5>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example17" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form2Example17">Name:</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example17" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example27" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block" type="button">Register</button>
                        </div>

                        {/* <p className="mb-2" style={{ color: '#393f81', textAlign: 'center' }}>Forgot password? Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p> */}
                    </form>
                </div>
            </div>

        </div>
    );
}
