// no concept of state so not a container just a component
import React, { Component } from 'react';

class GoogleMap extends Component {
		componentDidMount() {
			//embedded map inside document, this.refs.map = where map will get rendered to
			new google.maps.Map(this.refs.map, {
				zoom:12,	
				center: {
					lat: this.props.lat,
					lng: this.props.lon
				}
			});
		}

		//direct reference to the html element
		render() {
			return <div ref="map" />
		}
}

export default GoogleMap;