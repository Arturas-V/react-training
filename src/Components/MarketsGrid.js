import React from "react";

class MarketsGrid extends React.Component {

	constructor(props) {
		super(props);

		this.state = {marketData: []};
	}

	componentDidMount() {
	    this.props.onRef(this)
	}
	
	componentWillUnmount() {
	    this.props.onRef(undefined)
	}

	render() {
		console.log("Market grid render ", this.state.marketData);

		if(this.state.marketData.length == 0) {
			console.log("No data yet");
		} else {
			console.log("Yahooo - data arrived");
		}
		

		return(
			<section>
				<h2>MArkets grid</h2>
			</section>
		)		
	};
}

export default MarketsGrid;