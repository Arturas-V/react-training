import React from "react";

// Components
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

// Endpoints for all symbols data:
// https://bittrex.com/api/v1.1/public/getmarketsummaries
// https://api-pub.bitfinex.com/v2/tickers?symbols=ALL
// https://api.binance.com/api/v3/ticker/price

class App extends React.Component {

	render() {
		return(
			<React.Fragment>
			    <Header />
			    <Main />
			    <Footer />
			</React.Fragment>
		)		
	}

}

export default App;