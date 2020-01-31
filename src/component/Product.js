import React from 'react';
import styles from './component.module.css';


const Product = () => {


    return (
        <div className={`container ${styles.marginTop}`}>

            <div className={`text-center ${styles.marginBottom}`}>
                <h1 className="display-4">Technology – <span className="text-muted">Investments</span></h1>
                <h4 className="text-muted font-weight-normal">Sleek, modern, and intuitive trading platforms</h4>
            </div>

            <hr />

            <div className="row my-5">
                <div className="col-12 col-lg-8">
                    <img src="https://zerodha.com/static/images/products-kite.png"
                        className="img-fluid" />
                </div>
                <div className="col-12 col-lg-4 mt-5">
                    <h1 className="h1 mb-4">Kite</h1>
                    <p className="mb-4">Our ultra-fast flagship trading platform with streaming market data,
                         advanced charts, an elegant UI, and more. Enjoy the Kite experience
                          seamlessly on your Android and iOS devices.
                    </p>
                    <a href="#">Learn More -></a>

                    <div className="row mt-3">
                        <div className="col-6">
                            <a href="#">
                                <img src="https://zerodha.com/static/images/google-play-badge.svg"
                                    className="img-fluid"
                                />
                            </a>

                        </div>
                        <div className="col-6">
                            <a href="#">
                                <img src="https://zerodha.com/static/images/appstore-badge.svg"
                                    className="img-fluid" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5">

                <div className={`col-12 col-lg-4 ${styles.marginTop}`}>
                    <h1>Console</h1>
                    <p className="text-muted text-left">The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                    <a href="#">Learn More -></a>
                </div>

                <div className="col-lg-2"></div>
                <div className="col-12 col-lg-6">
                    <a href="#">
                        <img src="https://zerodha.com/static/images/products-console.png"
                            className="img-fluid" />
                    </a>

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-8">
                    <a href="#">
                        <img src="https://zerodha.com/static/images/products-coin.png" />
                    </a>
                </div>
                <div className={`col-12 col-lg-4 mt-5`}>
                    <h1 className="mb-3 h1">Coin</h1>
                    <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account.
                        Enjoy the investment experience on your Android and iOS devices.</p>
                    <a href="#">Coin -></a>
                </div>
            </div>

            <div className="row my-5">

                <div className={`col-12 col-lg-4 ${styles.marginTop}`}>
                    <h1>Kite Connect API</h1>
                    <p className="text-muted text-left">Build powerful trading platforms and experiences with
                     our super simple HTTP/JSON APIs. If you are a startup,
                     build your investment app and showcase it to our clientbase.</p>
                    <a href="#">Kite Connect  -></a>
                </div>

                <div className="col-lg-2"></div>
                <div className="col-12 col-lg-6">
                    <a href="#">
                        <img src="https://zerodha.com/static/images/products-kiteconnect.png"
                            className="img-fluid" />
                    </a>

                </div>
            </div>

            <div className="row my-5">
                <div className="col-12 col-lg-8">
                    <img src="https://zerodha.com/static/images/varsity-products.png"
                        className="img-fluid" />
                </div>
                <div className="col-12 col-lg-4 mt-5">
                    <h1 className="h1 mb-4">Varsity mobile</h1>

                    <p className="mb-4">Our ultra-fast flagship trading platform with streaming market data,
                    advanced charts, an elegant UI, and more.
                    Enjoy the Kite experience seamlessly on your Android and iOS devices.
                    </p>
                    <a href="#">Learn More -></a>

                    <div className="row mt-3">
                        <div className="col-6">
                            <a href="#">
                                <img src="https://zerodha.com/static/images/google-play-badge.svg"
                                    className="img-fluid"
                                />
                            </a>

                        </div>
                        <div className="col-6">
                            <a href="#">
                                <img src="https://zerodha.com/static/images/appstore-badge.svg"
                                    className="img-fluid" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5">

                <div className={`col-12 col-lg-4 ${styles.marginTop}`}>
                    <h1>Sentinel</h1>
                    <p className="text-muted text-left">Build powerful trading platforms and experiences with our
                     super simple HTTP/JSON APIs. If you are a startup,
                     build your investment app and showcase it to our clientbase</p>
                    <a href="#">Sentinel -></a>
                </div>

                <div className="col-lg-2"></div>
                <div className="col-12 col-lg-6">
                    <a href="#">
                        <img src="https://zerodha.com/static/images/sentinel-products.png"
                            className="img-fluid" />
                    </a>

                </div>
            </div>


            <div className="text-center my-5">

                <h2 className="h1 mb-4">The Zerodha Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="row my-5 ">
                    <div className="col-12 col-md-3">
                        <a href="#">
                            <img src="https://zerodha.com/static/images/products/smallcase-logo.png"
                                className={`img-fluid ${styles.iconImage}`} />
                            <br />
                            <small className="text-decoration-none">Thermatic Investment platform</small>
                        </a>
                    </div>
                    <div className="col-12 col-md-3">
                        <a href="#" >
                            <img src="https://zerodha.com/static/images/products/streak-logo.png"
                                className={`img-fluid ${styles.iconImage}`} />
                            <br />
                            <small>Algo & strategy platform</small>
                        </a>
                    </div>
                    <div className="col-12 col-md-3">
                        <a href="#">
                            <img src="https://zerodha.com/static/images/products/sensibull-logo.svg"
                                className={`img-fluid ${styles.iconImage}`} />
                            <br />
                            <small>Option Trading platform</small>
                        </a>
                    </div>
                    <div className="col-12 col-md-3">
                        <a href="#" >
                            <img src="https://zerodha.com/static/images/products/goldenpi-logo.png"
                                className={`img-fluid ${styles.iconImage}`} />
                            <br />
                            <small>Bonds trading platform</small>
                        </a>
                    </div>





                </div>
                <button className="btn btn-lg btn-info my-4">Sign Up now</button>
            </div>


        </div>
    )

}


export default Product;