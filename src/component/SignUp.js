import React from 'react';
import styles from "./component.module.css"

const SignUp = () => {



    return (
        <div className="m-5">
            <div className={`container text-center  ${styles.marginTop}`} >
                <h2 className="h2 mb-3">Join 1.5+ million investors & traders</h2>
                <h5 className="text-muted font-weight-normal">Open a trading and Demat account online and start investing for free</h5>
            </div>
            <div >
                <div className="row">
                    <div className="col-12 col-lg-6 my-5">
                        <img src="https://zerodha.com/static/images/account_open.png" className="img-fluid" />
                    </div>

                    <div className={`col-12 col-lg-6 ${styles.marginTop}`}>
                        <h2 className="h2">Signup now</h2>
                        <p className="text-muted">Or continue with your existing application</p>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">+91</span>
                            </div>
                            <input type="number"
                                placeholder="Your 10 digit mobile number"
                                aria-label="mobile" aria-describedby="addon-wrapping" />
                        </div>
                        <small>You will receive an OTP on your number</small>
                        <br />
                        <button className="btn btn-lg btn-primary my-2">Continue</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SignUp; 