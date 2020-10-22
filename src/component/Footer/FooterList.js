import React, { Component } from 'react';
import "./Footer.css"
class FooterList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <>
                <div className="col-12 col-lg-3 mt-3">
                    <h5 className="ml-5">Company</h5>
                    <ul className="text-muted font-weight-light ">
                        <li><h6>About</h6></li>
                        <li><h6>Products</h6></li>
                        <li><h6>Pricing</h6></li>
                        <li><h6>Referral Programme</h6></li>
                        <li><h6>Careers</h6></li>
                        <li><h6>Press & media</h6></li>
                        <li><h6>Zerodha Cares (CSR)</h6></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3 mt-3">
                    <h5 className="ml-5">Support</h5>
                    <ul className="text-muted font-weight-light ">
                        <li><h6>Contact</h6></li>
                        <li><h6>Support Portal</h6></li>
                        <li><h6>Z-Connect blog</h6></li>
                        <li><h6>List of charges</h6></li>
                        <li><h6>Downloads & Resources</h6></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3 mt-3 ">
                    <h5 className="ml-5">Account</h5>
                    <ul className="text-muted font-weight-light ">
                        <li><h6>Open an account</h6></li>
                        <li><h6>Fund Transfer</h6></li>
                        <li><h6>60 day challenge</h6></li>
                    </ul>
                </div>


            </>
        )
    }
}

export default FooterList;