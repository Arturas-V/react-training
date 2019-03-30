import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import MarketsGrid from './MarketsGrid.js'


class Main extends React.Component {

	constructor(props) {
		super(props);

		this.marketLinkClickHandler = this.marketLinkClickHandler.bind(this);
		this.marketDataUpdate = this.marketDataUpdate.bind(this);
	}

	/*
	 * Upon Main component mount let's fetch current market data
	 */
	componentWillMount() {
		this.fetchMarketData(createBrowserHistory().location.pathname);
	}

	/*
	 * Update market method - settting child element state and then it updates
	 */
	marketDataUpdate(data) {
		this.child.setState({marketData:data});	
	}

	/*
	 * Market Link click event handler
	 */
	marketLinkClickHandler(e) {
		this.fetchMarketData(e.target.attributes.getNamedItem('data-exchange').value);
	}

	/*
	 * Fetch market data by making rest call to api
	 */
	fetchMarketData(url) {
		return fetch('../../data' + url + '.json')
		    .then(response => response.json())
		    .then(responseJson => {
		    	this.marketDataUpdate(responseJson);
		    })
		    .catch(error => {
		      console.error(error);
		    });
	}

	/*
	 *  render DOM
	 */
	render() {
		return (
		    <Router>
			    <main>    	

			      	<ul className="marketsNavigation">
				        <li>
				          <Link to="/binance" data-exchange="/binance" onClick={this.marketLinkClickHandler}>Binance</Link>
				        </li>
				        <li>
				          <Link to="/bitfinex" data-exchange="/bitfinex" onClick={this.marketLinkClickHandler}>Bitfinex</Link>
				        </li>
				        <li>
				          <Link to="/bittrex" data-exchange="/bittrex" onClick={this.marketLinkClickHandler}>Bittrex</Link>
				        </li>
			      	</ul>

			      	<hr />

			      	<MarketsGrid onRef={ref => (this.child = ref)}/>
			      
			    </main>
			</Router>
		)
	}
}

// <Route path="/binance" render={this.marketGridRender} />
// <Route path="/bitfinex" render={this.marketGridRender} />
// <Route path="/bittrex" render={this.marketGridRender} />	

export default Main;