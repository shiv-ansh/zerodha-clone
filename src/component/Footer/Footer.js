import React, { Component } from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="border-top">
                <div className="container ">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <img src="https://zerodha.com/static/images/logo.svg" style={{ height: 30, width: 150 }} />
                            <h5><i className="fas fa-phone-alt"></i> +91 80 4040 2020</h5>
                            <small>&copy; 2010 - 2020, Zerodha Broking Ltd.
                            <br />
                                All rights reserved.
                        </small>
                            <div className="d-flex">
                                <div className="m-2">
                                    <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
                                </div>
                                <div className="m-2">
                                    <a href="#"><i className="fab fa-facebook-square fa-lg"></i></a>
                                </div>
                                <div className="m-2">
                                    <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
                                </div>
                                <div className="m-2">
                                    <a href="#"><i className="fab fa-linkedin-in fa-lg"></i></a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default Footer;