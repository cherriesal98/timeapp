//Previus homework :(

const weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  Santiago: {
    temp: 28.3,
    humidity: 30,
  },
  tokyo: {
    temp: 17.3,
    humidity: 40,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },

  "san francisco": {
    temp: 20.9,
    humidity: 80,
  },
};


 // Feature #1: Display current date and time 
 function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', hour: 'numeric', minute: 'numeric' };
  const newDateTime = new Intl.DateTimeFormat('en-US', options).format(now);
  document.getElementById('datetime').innerText = newDateTime;
  console.log(newDateTime)
}

updateDateTime();

//2

function cityName() {
const cityInput = document.getElementById('city-input').value;
var heading = document.querySelector("h1");
heading.innerHTML = cityInput;
cityInput = cityInput.toLowerCase();
if (weather[cityInput] !== undefined) {
  let temperature = weather[cityInput].temp;
  let humidity = weather[cityInput].humidity;
  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
  console.log(querySelector)
}  
}

let button= document.querySelector("#button");
      button.addEventListener("click", cityName);

