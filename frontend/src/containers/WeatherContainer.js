import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWeather } from '../actions/actions';
import WeatherInfo from '../components/WeatherInfo/WeatherInfo';
import WeatherInfoWrapper from '../components/WeatherInfo/WeatherInfoWrapper';

function mapStateToProps (state) {
    return {
        weather: state.weather
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo)

