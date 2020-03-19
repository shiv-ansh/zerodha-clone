import React from 'react'
import './Support.css'
import { Link } from 'react-router-dom'

class Support extends React.Component {
    render() {
        return (
            <>
                <div className=" d-md-block">
                    <div className="container-fluid support-portal">
                        <div className="container-fluid">

                            <div className="row ">

                                <div className="col-2 offset-1">
                                    <h4>Support portal</h4>
                                </div>

                                <div className="col-7">
                                </div>

                                <div className="col-2">
                                    <Link style={{ color: 'azure' }}><h5><u>Login with kite</u></h5></Link>
                                </div>

                            </div>

                            <div className="row py-5">

                                <div className="col-2">
                                </div>

                                <div className="col-8 text-center">
                                    <div className="row">
                                        <h4 className="col-12">Search for an answer or browse help topics to create a ticket</h4>
                                        <div className="input-group input-group-lg col-12">
                                            <input
                                                className="d-flex flex-row col-10 offset-1 align-items-center justify-content-center my-3 py-3"
                                                placeholder="Eg : how do i activate F&O, why is my order getting rejected ... " />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-2"></div>

                                <div className="col-2">
                                </div>

                                <div className="col-8 text-center">
                                    <h5>&#9888; On submitting your IPO application:</h5>
                                </div>

                                <div className="col-2">
                                </div>

                                <div className="col-3"></div>


                                <div className="col-7 text-left">
                                    <ol>
                                        <li>You may have to wait till the end of the day to receive the collect request, due to delays from the Issuer's bank.</li>
                                        <li>Your UPI mandate status on Console isn't updated in real-time and may take up to a day.</li>
                                    </ol>
                                </div>
                                <div className="col-2"></div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="container py-1">
                    <h3 className="my-5">To create a ticket, select a relevant topic</h3>
                    <div className="row">

                        <div className="col-md-4 my-md-0 col-sm-12 my-sm-3">
                            <h5 className="text-dark">
                                <i class="fas fa-plus-circle"></i> Account opening
            </h5>
                            <div className="mx-4">
                                <ul>
                                    <li>
                                        <Link><p >Online Account Opening</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Offline Account Opening</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Company, Partnership and HUF Account Opening</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >NRI Account Opening</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Charges at Zerodha</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Zerodha IDFC FIRST Bank 3-in-1 Account</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Getting Started</p></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 my-md-0 col-sm-12 my-sm-3">
                            <h5 className="text-dark">
                                <i class="fas fa-user-plus"></i> Your Zerodha Account
            </h5>
                            <div className="mx-4">
                                <ul>
                                    <li>
                                        <Link><p >Login Credentials</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Account Modification and Segment Addition</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >DP ID and bank details</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Your Profile</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Transfer and conversion of shares</p></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 my-md-0 col-sm-12 my-sm-3">
                            <h5 className="text-dark">
                                <i class="fas fa-business-time"></i> Trading and Markets
            </h5>
                            <div className="mx-4">
                                <ul>
                                    <li>
                                        <Link><p >Margin/leverage, Product and Order types</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Kite Web and Mobile</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Trading FAQs</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Corporate Actions</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Sentinel</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Kite API</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Pi and other platforms</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Stockreports+</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >GTT</p></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 my-md-0 col-sm-12 my-sm-3">
                            <h5 className="text-dark">
                                <i class="fas fa-money-check"></i> Funds
            </h5>
                            <div className="mx-4">
                                <ul>
                                    <li>
                                        <Link><p >Adding Funds</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Fund Withdrawal</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >eMandates</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Adding Bank Accounts</p></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 my-md-0 col-sm-12 my-sm-3">
                            <h5 className="text-dark">
                                <i class="fas fa-volleyball-ball"></i> Console
                            </h5>
                            <div className="mx-4">
                                <ul>
                                    <li>
                                        <Link><p >Reports </p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Ledger</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Profile</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Portfolio</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >60 Day Challenge</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >IPO</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Referral Program</p></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 my-md-0 col-sm-12 my-sm-3">
                            <h5 className="text-dark">
                                <i class="fas fa-coins"></i> Coin
                             </h5>
                            <div className="mx-4">
                                <ul>
                                    <li>
                                        <Link><p >Understanding Mutual Funds </p></Link>
                                    </li>
                                    <li>
                                        <Link><p >About Coin</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Buying and Selling through Coin</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Starting an SIP</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Managing your Portfolio</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Coin App</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Moving to Coin</p></Link>
                                    </li>
                                    <li>
                                        <Link><p >Government Securities</p></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>





                    </div>
                </div>

            </>
        )
    }
}

export default Support