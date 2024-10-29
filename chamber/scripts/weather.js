document.addEventListener('DOMContentLoaded', () => {
  const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=47.66&lon=-117.43&appid=a9f91d691f5b7f9a2c32019a6d741d66&units=imperial';
  const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.66&lon=-117.43&appid=a9f91d691f5b7f9a2c32019a6d741d66&units=imperial';

  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  const forecastContainer = document.querySelector('#forecast');

  async function apiFetch() {
    try {
      const currentWeatherResponse = await fetch(currentWeatherUrl);
      const forecastResponse = await fetch(forecastUrl);

      if (currentWeatherResponse.ok && forecastResponse.ok) {
        const currentWeatherData = await currentWeatherResponse.json();
        const forecastData = await forecastResponse.json();
        displayResults(currentWeatherData, forecastData);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function displayResults(currentWeatherData, forecastData) {
    // Check if weather data is available
    if (currentWeatherData && currentWeatherData.main && currentWeatherData.weather) {
      // Display current weather
      currentTemp.innerHTML = `${currentWeatherData.main.temp}&deg;F`;
      
      // Set weather icon if available
      const iconCode = currentWeatherData.weather[0]?.icon;
      if (iconCode) {
        const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', currentWeatherData.weather[0].description);
      } else {
        weatherIcon.setAttribute('src', 'path/to/placeholder-image.png');
        weatherIcon.setAttribute('alt', 'Weather data not available');
      }

      // Set caption description
      let desc = currentWeatherData.weather[0]?.description || 'No weather description available';
      captionDesc.textContent = `Today - ${desc}`;
    }

    // Display next 3 days of forecast
    forecastContainer.innerHTML = ''; // Clear previous content
    let dayCounter = 0;
    const today = new Date().getDate();

    forecastData.list.forEach((forecast) => {
      const forecastDate = new Date(forecast.dt * 1000);
      const forecastHour = forecastDate.getHours();

      // Select a forecast between 12 PM and 3 PM, if available, for each day after today
      if (forecastDate.getDate() !== today && forecastHour >= 12 && forecastHour <= 15 && dayCounter < 3) {
        const dayName = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });

        // Create a container for each day’s forecast
        const forecastDay = document.createElement('div');
        forecastDay.classList.add('forecast-day');

        // Date
        const dayDate = document.createElement('p');
        dayDate.textContent = dayName;
        forecastDay.appendChild(dayDate);

        // Temperature
        const dayTemp = document.createElement('p');
        dayTemp.innerHTML = `${forecast.main.temp}&deg;F`;
        forecastDay.appendChild(dayTemp);

        // Weather icon
        const dayIcon = document.createElement('img');
        const forecastIconCode = forecast.weather[0]?.icon;
        if (forecastIconCode) {
          dayIcon.setAttribute('src', `https://openweathermap.org/img/w/${forecastIconCode}.png`);
          dayIcon.setAttribute('alt', forecast.weather[0].description);
        } else {
          dayIcon.setAttribute('src', 'path/to/placeholder-image.png');
          dayIcon.setAttribute('alt', 'No weather icon available');
        }
        forecastDay.appendChild(dayIcon);

        // Weather description
        const dayDesc = document.createElement('p');
        dayDesc.textContent = forecast.weather[0]?.description || 'No description available';
        forecastDay.appendChild(dayDesc);

        // Append this forecast day to the forecast container
        forecastContainer.appendChild(forecastDay);

        // Increment day counter
        dayCounter++;
      }
    });
  }

  apiFetch();
});


