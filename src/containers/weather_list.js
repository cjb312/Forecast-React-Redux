import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    /* using es6 for cleaner code
    const lon = cityData.city.coord.lat;
    const lat = cityData.city.coord.lon; */
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
      	 <td> <GoogleMap lon={lon} lat={lat} /> </td>

          <td><Chart data={temp} color="red" units="F" /></td>
          <td><Chart data={pressure} color="orange" units="hPa" /></td>
          <td><Chart data={humidity} color="green" units="%"/></td>

      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
      );
  }
}

//same thing as const weather = state.weather
// without es6 it would just be (state) but couldnt condense code since key and value wouldn't be identical.  just cleaner code
function mapStateToProps({weather}) {
	return { weather }; // { weather } === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);