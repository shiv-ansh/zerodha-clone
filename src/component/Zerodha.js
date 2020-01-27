import React from 'react';

class Zerodha extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container my-5">
                <div className="text-center mb-5">
                    <img src="https://zerodha.com/static/images/landing.png" style={{ width: "400px", height: "300px" }} className="img-fluid"></img>
                    <h1 className="display-4 mt-5">Invest in everything</h1>
                    <h5 className="font-weight-light">Online platform to invest in stocks, derivatives, mutual funds, and more</h5>
                    <button className="btn btn-lg btn-info my-5" style={{ width: "200px" }} id="zerodha-btn">Sign up now</button>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-md-6">
                        <img src="https://zerodha.com/static/images/largest-broker.svg"></img>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="h2">Largest stock broker in India</h2>
                        <p>1.5+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                        <div class="row ml-2 mt-5">

                            <ul className="col-12 col-md-6">
                                <li className="my-3">Futures and Options</li>
                                <li className="my-3">Commodity derivatives</li>
                                <li className="my-3">Currency derivatives</li>
                            </ul>

                            <ul className="col-12 col-md-6">
                                <li className="my-3">Stocks & IPOs</li>
                                <li className="my-3">Direct mutual funds</li>
                                <li className="my-3">Bonds and Govt. Securities</li>
                            </ul>
                            <a href="">
                                <img src="https://zerodha.com/static/images/press-logos.png" style={{ width: "500px" }} className="img-fluid"></img>
                            </a>


                        </div>

                    </div>
                </div>

                {/* product section */}
                <div className="product text-center my-5">
                    <h2 className="h2 mt-5">The Zerodha Universe</h2>
                    <p className="mt-3" style={{ fontSize: "18px" }}>A whole ecosystem of modern investment apps</p>
                    <p style={{ fontSize: "18px" }}>tailored to specific needs, built from the ground up</p>
                    <a href="#">
                        <img src="https://zerodha.com/static/images/ecosystem.png" className="img-fluid"></img>
                    </a>
                    <div className="mt-5">
                        <a href="#" className="zerodha-anchor">Explore our products  -></a>
                    </div>


                </div>

                {/* pricing section */}
                <div className="row justify-content-between my-5">
                    <div className="col-12 col-lg-6">
                        <h1 className="mt-2 mb-4">Unbeatable pricing</h1>
                        <p>We pioneered the concept of discount broking and price <br />transparency in India. Flat fees and no hidden charges.</p>
                        <a href="#" className="zerodha-anchor">See Pricing -></a>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-12 col-lg-6 text-center border">
                                <h1 className="mb-5 mt-2">&#8377; 0</h1>
                                <p className="mb-5">Free equity delivery <br /> and direct mutual funds</p>
                            </div>
                            <div className="col-12 col-lg-6 text-center border">
                                <h1 className="mb-5 mt-2">&#8377; 20</h1>
                                <p className="mb-5">Intraday and F&O</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Education Section  */}
                <div className="row mt-5">
                    <div className="col-12 col-lg-6 mt-5">
                        <img src="https://zerodha.com/static/images/index-education.svg" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 mt-5">
                        <h3>Free and open market education</h3>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Zerodha