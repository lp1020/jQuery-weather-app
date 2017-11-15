console.log('main.js is connected!');
const $body = $('body');
const $zipCode = $('#zipCode')
/*

Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
*/
window.onload = function() {
  $('#searchButton').on('click', function() {
    let zipCode = $('#zipCode').val();
//let zipArr = [];
// 2. When the button is clicked
//zipArr.push(zipCode);
//console.log(zipArr[0]);
//   - grab the input
//   - store the value
//   - make an API request based on the input value
var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&units=imperial' + '&appid=06b9de1306b2373f9b1bdaa86474a6ec'
    $.ajax({
    url: url,
    type: "GET",
    dataType: "jsonp"
  }).done(function(data) {
    var showWeather = show(data);
    $("#weatherReveal").html(showWeather);
    $('#zipCode').val('');
  })


// 3. When the API response is returned
//   - grab all the appropriate DOM elements
//   - append the data to the DOM

})


  const $cityName = $('#cityName');
  const $currentWeather = $('#currentWeather');
  const $currentTemp = $('#currentTemp');
  const $highTemp = $('#highTemp');
  const $lowTemp = $('#lowTemp');
  const $long = $('#long');
  const $lat = $('#lat');
  const $humidity = $('#humidity');
  const $windSpeed = $('#windSpeed');


  function show(data) {
     $cityName.html(data.name).css({
      'display': 'flex',
      'font-size': '30px',
      'font-weight': '900',
      'justify-content': 'space-around',
      'margin-top': '50px',
      'font-family': 'Arial',
    });
           $currentTemp.html(data.main.temp + '°').css({
      'display': 'flex',
      'font-size': '140px',
      'font-weight': '900',
      'justify-content': 'space-around',
      'margin-top': '50px',
      'font-family': 'Arial',
    });


           $currentWeather.html(data.weather[0].main).css({
      'display': 'flex',
      'font-size': '46px',
      'font-weight': '900',
      'justify-content': 'space-around',
      'margin-top': '50px',
      'font-family': 'Arial',
    });
           $highTemp.html('Today\'s High<br>' + data.main.temp_max + '°').css({
      'dispay': 'inline-flex',
      'font-size': '30px',
      'font-weight': '900',
      'margin-top': '50px',
      'font-family': 'Arial',
      'margin-left': '25px',
      'justify-content': 'space-around',
    });
           $lowTemp.html('Today\'s Low<br>' + data.main.temp_min + '°').css({
        'position': 'absolute',
      'font-size': '30px',
      'font-weight': '900',
      'margin-top': '50px',
      'font-family': 'Arial',
      'margin-top': '-65px',
      'margin-left': '900px',

    });
           $long.html('Longitude<br>' + data.coord.lon).css({
      'position': 'absolute',
      'font-size': '30px',
      'font-weight': '900',
      'margin-top': '50px',
      'margin-left': '25px',
      'font-family': 'Arial',
    });
           $lat.html('Latitude<br>' + data.coord.lat).css({
      'position': 'absolute',
      'font-size': '30px',
      'font-weight': '900',
      'margin-top': '50px',
      'margin-left': '350px',
      'font-family': 'Arial',
      'justify-content': 'space-around',
    });
           $humidity.html('Humidity<br>' + data.main.humidity + '%').css({
      'position': 'absolute',
      'font-size': '30px',
      'font-weight': '900',
      'margin-top': '50px',
      'margin-left': '650px',
      'font-family': 'Arial',
      'justify-content': 'space-around',
    });
           $windSpeed.html('Wind Speed<br>' + data.wind.speed + ' mph').css({
      'position': 'absolute',
      'font-size': '30px',
      'font-weight': '900',
      'margin-top': '50px',
      'margin-left': '900px',
      'font-family': 'Arial',
      'justify-content': 'space-around',
    });

function tempColor() {
  console.log('blue or red')
    if (data.main.temp < 40) {
      $currentTemp.css('color', 'blue');
    }
    if (data.main.temp > 90) {
      $currentTemp.css('color', 'red');
    }
  }
tempColor();

}

}
