$('#today').text((dayjs()).format('dddd, MMMM D YYYY, h:mm:ss a'));
$('#day1').text(((dayjs()).add(1,'day')).format('ddd, MMM D'));
$('#day2').text(((dayjs()).add(2,'day')).format('ddd, MMM D'));
$('#day3').text(((dayjs()).add(3,'day')).format('ddd, MMM D'));
$('#day4').text(((dayjs()).add(4,'day')).format('ddd, MMM D'));
$('#day5').text(((dayjs()).add(5,'day')).format('ddd, MMM D'));


getCities();
    function getCities(){
        var stored = JSON.parse(localStorage.getItem("Search-History"));

        for (i = 0; i < stored.length; i++){
            var cityList = $("#cityList");
            var newBtn = $('<button class="list-group-item"></button>');
            newBtn.appendTo(cityList);
            newBtn.text(stored[i]);
        };
    };    


$(document).ready(function () {

    $('.searchBtn').click(function (e) { 
        e.preventDefault();
        fetchCity(); // run the fetch for all today and the 5 day forecast
        saveCity(); //saves city in the seach list under the search bar
    });

    $('.list-group-item').click(function (e) { 
        e.preventDefault();
        $('.userInput').val() = $(this).val();
        console.log(this);
        fetchCity(); // run the fetch for all today and the 5 day forecast
    });

    function fetchCity() {
        var userInputEl = $('.userInput').val();
        $('#currentCity').text(userInputEl);

        var appUrl = "http://api.openweathermap.org/geo/1.0/direct?appid=f0688e2fdade5250b4d094a2c4d7d063&q=";
        var inputUrl = appUrl.concat(userInputEl);

        fetch(inputUrl) // Fetch the lat and long of the city searched 
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                console.log(data[0].lat);
                console.log(data[0].lon);

                var cityLat = data[0].lat;
                var cityLong = data[0].lon;
            
                var latLonUrl = "http://api.openweathermap.org/data/2.5/forecast?appid=f0688e2fdade5250b4d094a2c4d7d063&lat="
                var cLatLonUrl = latLonUrl.concat(cityLat + "&lon=" + cityLong)
                
                fetch(cLatLonUrl) // Fetch the 5 day forecast for the city searched using latitude and longitude
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {

                        console.log(data);
                        console.log(data.list[0].main.temp);       
                        
                        // !! TO DO - Figure out a For Loop to repeat this using index
                        //Today
                        var farTemp = (((Math.floor((data.list[0].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[0].wind.speed;
                        var humidity = data.list[0].main.humidity;
                        $('#0Temp').text("Temperature: " + farTemp + "°F");
                        $('#0Wind').text("Wind Speed: " + wind + " MPH");
                        $('#0Humidity').text("Humidity: " + humidity + "%");

                        //day1
                        var farTemp = (((Math.floor((data.list[1].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[1].wind.speed;
                        var humidity = data.list[1].main.humidity;
                        $('#1Temp').text("Temperature: " + farTemp + "°F");
                        $('#1Wind').text("Wind Speed: " + wind + " MPH");
                        $('#1Humidity').text("Humidity: " + humidity + "%");

                        //day2
                        var farTemp = (((Math.floor((data.list[2].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[2].wind.speed;
                        var humidity = data.list[2].main.humidity;
                        $('#2Temp').text("Temperature: " + farTemp + "°F");
                        $('#2Wind').text("Wind Speed: " + wind + " MPH");
                        $('#2Humidity').text("Humidity: " + humidity + "%");

                        //day3
                        var farTemp = (((Math.floor((data.list[3].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[3].wind.speed;
                        var humidity = data.list[3].main.humidity;
                        $('#3Temp').text("Temperature: " + farTemp + "°F");
                        $('#3Wind').text("Wind Speed: " + wind + " MPH");
                        $('#3Humidity').text("Humidity: " + humidity + "%");

                        //day4
                        var farTemp = (((Math.floor((data.list[4].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[4].wind.speed;
                        var humidity = data.list[4].main.humidity;
                        $('#4Temp').text("Temperature: " + farTemp + "°F");
                        $('#4Wind').text("Wind Speed: " + wind + " MPH");
                        $('#4Humidity').text("Humidity: " + humidity + "%");

                        //day5
                        var farTemp = (((Math.floor((data.list[5].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[5].wind.speed;
                        var humidity = data.list[5].main.humidity;
                        $('#5Temp').text("Temperature: " + farTemp + "°F");
                        $('#5Wind').text("Wind Speed: " + wind + " MPH");
                        $('#5Humidity').text("Humidity: " + humidity + "%");
                    });
            });  
        };
        
    function saveCity (){
        var oldItems = JSON.parse(localStorage.getItem("Search-History")) || [];
        var newItem = $('.userInput').val();
    
        oldItems.push(newItem);

        //Remove duplicates

        localStorage.setItem("Search-History", JSON.stringify(oldItems));     
    };
});


// TO DO - Remove duplicate saved cities
// TO DO - Create a clear all searches button
// TO DO - Buttons for prev searches need to be clickable and run as the input 



// TODO: WHEN I search for a city 
// THEN I am presented with current and future conditions for that city and that city is added to the search history



// TODO: WHEN I view current weather conditions for that city 
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed


// TODO: WHEN I view future weather conditions for that city 
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity



// TODO: WHEN I click on a city in the search history 
// THEN I am again presented with current and future conditions for that city




// TODO: Satisfies all of the above acceptance criteria plus the following:
// * Uses the OpenWeather API to retrieve weather data.
// * Uses `localStorage` to store persistent data.

        /*
        $.each(collection, function (indexInArray, valueOfElement) { 
             
        });
        */