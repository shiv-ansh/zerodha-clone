import React from 'react';
import Navbar from './component/Navbar';
import About from './component/About';
import Footer from './component/Footer';
import Pricing from './component/Pricing';
import Product from './component/Products';
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
        <Zerodha />
      </div>
    )
  }

}

export default App;
