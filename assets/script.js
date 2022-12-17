// Display the current date and then the 5 subsequent dates from today
$('#today').text((dayjs()).format('dddd, MMMM D YYYY, h:mm:ss a'));
$('#day1').text(((dayjs()).add(1,'day')).format('ddd, MMM D'));
$('#day2').text(((dayjs()).add(2,'day')).format('ddd, MMM D'));
$('#day3').text(((dayjs()).add(3,'day')).format('ddd, MMM D'));
$('#day4').text(((dayjs()).add(4,'day')).format('ddd, MMM D'));
$('#day5').text(((dayjs()).add(5,'day')).format('ddd, MMM D'));

// Display the search history of cities that have been searched and are stored in local storage
// ACCEPTANCE CRITERIA: : WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
getCities();
    function getCities(){
        
        // JSON parse the items from local storage in the Search History object
        var stored = JSON.parse(localStorage.getItem("Search-History")) || [];
        
        // For loop that creates a button for each item in the object and adds a value and text for that button depending on the index of the item
        for (i = 0; i < stored.length; i++){
            var cityList = $("#cityList");
            var newBtn = $('<button class="list-group-item citySearched"></button>');
            newBtn.appendTo(cityList);
            newBtn.text(stored[i]);
            newBtn.val(stored[i]);
        };
    };    

// Load all DOM 
$(document).ready(function () {
    
    // When user clicks on the search button, run the fetchCity and saveCity functions
    $('.searchBtn').click(function (e) { 
        e.preventDefault();
        fetchCity(); // run the fetch for all today and the 5 day forecast
        saveCity(); //saves city in the seach list under the search bar
    });
    
    // ACCEPTANCE CRITERIA: WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city
    $('.citySearched').click(function (e) { 
        e.preventDefault();
        var userInputEl = $(this).attr("value"); // Value is the name of the city clicked
        $('.userInput').val(userInputEl); // Add a value attribute of the name of the saved city
        fetchCity(); // run the fetch for all today and the 5 day forecast
    });

    // ACCEPTANCE CRITERIA: WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
    function fetchCity() {
        
        // Use the value of either the inputted city or previously searched city value button that was clicked
        var userInputEl = $('.userInput').val();

        // Change the text of the Featured card heading
        $('#currentCity').text(userInputEl);

        // Concat the api link for openweathermap by using the input variable provided by the user
        var appUrl = "https://api.openweathermap.org/geo/1.0/direct?appid=f0688e2fdade5250b4d094a2c4d7d063&q=";
        var inputUrl = appUrl.concat(userInputEl);

        // Fetch the latitude and longitude of the city searched 
        fetch(inputUrl) 
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var cityLat = data[0].lat;
                var cityLong = data[0].lon;
                
                // Use the latitude and longitude to obtain the weather object from the api
                var latLonUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=f0688e2fdade5250b4d094a2c4d7d063&lat="
                var cLatLonUrl = latLonUrl.concat(cityLat + "&lon=" + cityLong)
                
                // ACCEPTANCE CRITERIA: WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
                fetch(cLatLonUrl) // Fetch the 5 day forecast for the city searched using latitude and longitude
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                        //Today
                        var farTemp = (((Math.floor((data.list[0].main.temp) - 273.15)) * 9) / 5) + 32; // Convert from Kelvin to Celsius to Farenheit
                        var wind = data.list[0].wind.speed;
                        var humidity = data.list[0].main.humidity;
                        var icon = data.list[0].weather[0].icon;
                        // Replace the text for today - all subsequent days have the same code structure
                        $('#0Temp').text("Temperature: " + farTemp + "°F");
                        $('#0Wind').text("Wind Speed: " + wind + " MPH");
                        $('#0Humidity').text("Humidity: " + humidity + "%");
                        $('#0icon').attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");

                        //day1
                        var farTemp = (((Math.floor((data.list[1].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[1].wind.speed;
                        var humidity = data.list[1].main.humidity;
                        var icon = data.list[1].weather[0].icon;
                        $('#1Temp').text("Temperature: " + farTemp + "°F");
                        $('#1Wind').text("Wind Speed: " + wind + " MPH");
                        $('#1Humidity').text("Humidity: " + humidity + "%");
                        $('#1icon').attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");

                        //day2
                        var farTemp = (((Math.floor((data.list[2].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[2].wind.speed;
                        var humidity = data.list[2].main.humidity;
                        var icon = data.list[2].weather[0].icon;
                        $('#2Temp').text("Temperature: " + farTemp + "°F");
                        $('#2Wind').text("Wind Speed: " + wind + " MPH");
                        $('#2Humidity').text("Humidity: " + humidity + "%");
                        $('#2icon').attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");

                        //day3
                        var farTemp = (((Math.floor((data.list[3].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[3].wind.speed;
                        var humidity = data.list[3].main.humidity;
                        var icon = data.list[3].weather[0].icon;
                        $('#3Temp').text("Temperature: " + farTemp + "°F");
                        $('#3Wind').text("Wind Speed: " + wind + " MPH");
                        $('#3Humidity').text("Humidity: " + humidity + "%");
                        $('#3icon').attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");

                        //day4
                        var farTemp = (((Math.floor((data.list[4].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[4].wind.speed;
                        var humidity = data.list[4].main.humidity;
                        var icon = data.list[4].weather[0].icon;
                        $('#4Temp').text("Temperature: " + farTemp + "°F");
                        $('#4Wind').text("Wind Speed: " + wind + " MPH");
                        $('#4Humidity').text("Humidity: " + humidity + "%");
                        $('#4icon').attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");

                        //day5
                        var farTemp = (((Math.floor((data.list[5].main.temp) - 273.15)) * 9) / 5) + 32;
                        var wind = data.list[5].wind.speed;
                        var humidity = data.list[5].main.humidity;
                        var icon = data.list[5].weather[0].icon;
                        $('#5Temp').text("Temperature: " + farTemp + "°F");
                        $('#5Wind').text("Wind Speed: " + wind + " MPH");
                        $('#5Humidity').text("Humidity: " + humidity + "%");
                        $('#5icon').attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
                    });
            });  
        };

    // ACCEPTANCE CRITERIA: Uses the OpenWeather API to retrieve weather data. & Uses `localStorage` to store persistent data.
    // Function to save the city searched in the local storage as part of the Search History object 
    function saveCity (){
        var oldItems = JSON.parse(localStorage.getItem("Search-History")) || [];
        var newItem = $('.userInput').val();
        // Use the running list object and add on new items to the old items
        oldItems.push(newItem);

        // Remove duplicates so cities are not repeating in the buttons of previously searched cities history
        var uniqueItems = [...new Set(oldItems)];
        // Store the unique items - no duplicates
        localStorage.setItem("Search-History", JSON.stringify(uniqueItems));  
    };
});

// Clear the history of searched cities
$('.clearBtn').click(function (e) { 
    e.preventDefault();
    localStorage.clear();
    location.reload();
});

// Reload the page if the user wants to do a new search. Also, the user can just click the reload page on the brower menu as well
$('.newBtn').click(function (e) { 
    e.preventDefault();
    location.reload();
});