import React from 'react';
import styles from './component.module.css';

class Pricing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`container ${styles.marginTop}`}>
                <div className={`text-center ${styles.marginBottom}`}>
                    <h1 className="h1">Pricing</h1>
                    <h5 className="font-weight-normal text-muted">Free equity investments and flat ₹20 intraday and F&O trades</h5>
                </div>
                <hr />


                <div className="row text-center mb-5">

                    <div className="col-12 col-lg-4">
                        <img src="https://zerodha.com/static/images/pricing-eq.svg" />
                        <h2>Free equity delivery</h2>
                        <p>All equity delivery investments (NSE, BSE),
                             are absolutely free — ₹ 0 brokerage.
                        </p>
                    </div>

                    <div className="col-12 col-lg-4">
                        <img src="https://zerodha.com/static/images/other-trades.svg" />
                        <h2>Intraday and F&O trades</h2>
                        <p>Flat ₹ 20 or 0.01% (whichever is lower) per
                            executed order on intraday trades across
                             equity, currency, and commodity trades
                        </p>
                    </div>

                    <div className="col-12 col-lg-4">
                        <img src="https://zerodha.com/static/images/pricing-eq.svg" />
                        <h2>Free direct MF</h2>
                        <p>All direct mutual fund investments are
                             absolutely free — ₹ 0 commissions & DP
                             charges.
                        </p>
                    </div>
                </div>

                <hr />

                <div className="text-center my-5">
                    <h1>Open a Zerodha account</h1>
                    <p>Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.</p>
                    <button className="btn btn-info btn-lg">Sign up Now</button>
                </div>

                <div className="my-5">
                    <div className="row ">
                        <div className="col-12 col-lg-8">
                            <a href="#">
                                <h5 className="text-center mb-4">Brokerage calculator</h5>
                                <ul>
                                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹20 per executed order.</li>
                                    <li>Digital contract notes will be sent via e-mail.</li>
                                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                                    <li>For NRI's: ₹200 or 0.1% (whichever lower) per executed order</li>
                                </ul>
                            </a>
                        </div>
                        <div className="col-12 col-lg-4">
                            <a href="#">
                                <h5 className="text-center ">List of charges</h5>
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}


export default Pricing;