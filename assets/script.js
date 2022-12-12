$('#today').text((dayjs()).format('dddd, MMMM D YYYY, h:mm:ss a'));
$('#day1').text(((dayjs()).add(1,'day')).format('ddd, MMM D'));
$('#day2').text(((dayjs()).add(2,'day')).format('ddd, MMM D'));
$('#day3').text(((dayjs()).add(3,'day')).format('ddd, MMM D'));
$('#day4').text(((dayjs()).add(4,'day')).format('ddd, MMM D'));
$('#day5').text(((dayjs()).add(5,'day')).format('ddd, MMM D'));

var userInputEl = $('.userInput');


$('.searchBtn').click(function (e) { 
    e.preventDefault();
    console.log(userInputEl);
});



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

