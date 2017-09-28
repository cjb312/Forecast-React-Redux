import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
		// take existing function(onInputchange) bind it to this. place the existing function with it
		// passing a callback around and it has a referance to this you need to bind the context
		this.onInputChange = this.onInputChange.bind(this);
		//same as above.  callback to dom element needs context bound. otherwise props = null error in console.
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value})
	}

	onFormSubmit(event) {
		event.preventDefault();
		// term was already defined as event.target.value which is the city the users enters
		this.props.fetchWeather(this.state.term);
		//clearing search input
		this.setState({ term: "" });
	}

	render () {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Search a city to see averages!"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// null there for when a function is passed it always goes in to the second argument there since theres is no state there therefore it goes straight to dispatch
export default connect(null, mapDispatchToProps)(SearchBar);







