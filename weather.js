
async function fetchData() {
  const API_KEY = "8716cbd1c1c1573488f1b0bacd3be6bc";
  let cityInput = document.getElementById("city-input");
  let weatherResult = document.getElementById("weather-result");
    
  let city = cityInput.value; 

  const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`);
  const res = await response.json();
  console.log(res);
  weatherResult.innerHTML = "";
  let title = document.createElement('h1');
  let image = document.createElement('img');
  let conditions = document.createElement('p');
  let temperature = document.createElement('p');
  let humidite = document.createElement('p');
  let vent = document.createElement('p');

  weatherResult.appendChild(title);
  weatherResult.appendChild(image);
  weatherResult.appendChild(conditions);
  weatherResult.appendChild(temperature);
  weatherResult.appendChild(humidite);
  weatherResult.appendChild(vent);
  let icon = res.weather[0].icon;
  title.innerHTML = res.name +', '+res.sys.country;
  image.src = ` https://openweathermap.org/img/wn/${icon}@2x.png`
  conditions.innerHTML = "Conditions : " +res.weather[0].description
  temperature.innerHTML = "temperature : " +res.main.temp
  humidite.innerHTML = "Humidité : " +res.main.humidity
  vent.innerHTML = "Vent : " +res.wind.speed
}
