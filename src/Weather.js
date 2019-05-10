import React, { Component } from 'react'
import './Weather.css'

class Weather extends Component {
    render() {
        return (
            <div className='Weather'>


                <h2>Weather
                <div className='container'>
                        <div>box1</div>
                        <div>box2</div>
                        <div>box3</div>
                        <div>box4</div>
                    </div>

                </h2>



            </div>

        )
    }
}

export default Weather;




/* <div id="openweathermap-widget-1"></div> */
    // <script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script> <script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 1,cityid: '1269843',appid: 'ed6c9e9071bafbc88024026040a84f46',units: 'metric',containerid: 'openweathermap-widget-1',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>