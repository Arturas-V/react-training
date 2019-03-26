import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

	constructor(props) {
		super(props)

		this.mainNavClickHandler = this.mainNavClickHandler.bind(this)
	}

	mainNavClickHandler(e) {
		const exchange = e.target.attributes.getNamedItem('data-ex').value;

	    return fetch('../../data/' + exchange + '.json')
		    .then(response => response.json())
		    .then(responseJson => {
		      return responseJson;
		    })
		    .catch(error => {
		      console.error(error);
		    });
	}

	render() {
		return (
		    <Router>
			    <main>    
			      <ul>
			        <li>
			          <Link to="/">All</Link>
			        </li>
			        <li>
			          <Link to="/binance" data-ex="binance" onClick={this.mainNavClickHandler}>Binance</Link>
			        </li>
			        <li>
			          <Link to="/bitfinex" data-ex="bitfinex" onClick={this.mainNavClickHandler}>Bitfinex</Link>
			        </li>
			      </ul>

			      <hr />

			      <Route exact path="/" component={Home} />
			      <Route path="/binance" component={About} />
			      <Route path="/bitfinex" component={Topics} />
			    </main>
			</Router>
		)
	}
}


const Home = () => (
  
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (

  <div>
    <h2>Binance</h2>
  </div>
);

const Topics = () => (
  <div>
    <h2>Bitfinex</h2>
  </div>
);


export default Main;