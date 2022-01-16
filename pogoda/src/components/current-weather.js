import React from 'react';
import './current-weather.scss';



class CurrentWeather extends React.Component {
        render() {
            let img;
            if (this.props.icon) {
                const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`
                img = ( < img className = "current-weather__icon"
                    src = { url }
                    alt = { this.props.description }
                    />);
                }

                return ( <
                    div className = "current-weather" >
                    <
                    div className = "current-weather__content" >
                    <
                    div className = "current-weather__text" >
                    <
                    p className = "current-weather__temp" > { this.props.currentTemperature }
                    º < /p>  <
                    p className = "current-weather__description" > { this.props.description } < /p>  < /
                    div >

                    { img }

                    <
                    /div>  <
                    p className = "current-weather__feels-like" >
                    Temperatura odczuwalna { this.props.feelsLike }
                    º <
                    /p>  <
                    div >


                    <
                    /div>  < /
                    div >

                )
            }
        }
        export default CurrentWeather;