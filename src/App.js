import React from 'react';
import { Switch, Route } from "react-router-dom";

import Navbar from './component/Navbar';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Pricing from './component/Pricing';
import Product from './component/Product';
import SignUp from './component/SignUp';
import Support from './component/Support';
import Zerodha from './component/Zerodha';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Zerodha} />
          <Route path="/component/About/About" exact component={About} />
          <Route path="/component/Product" exact component={Product} />
          <Route path="/component/Pricing" exact component={Pricing} />
          <Route path="/component/Support" exact component={Support} />
          <Route path="/component/SignUp" exact component={SignUp} />


        </Switch>

        <Footer />
      </div>
    )
  }

}

export default App;
