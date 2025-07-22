(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.fetchCurrentWeather = async function () {
  const city = document.getElementById('city-input').value.trim() || 'London';
  const url = `https://wttr.in/${city}?format=j1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const current = data.current_condition[0];
    const temp = current.temp_C;
    const desc = current.weatherDesc[0].value;

    document.getElementById('current-weather').textContent =
      `${city}: ${temp}°C - ${desc}`;
  } catch (error) {
    console.error('Error fetching weather:', error);
    document.getElementById('current-weather').textContent = 'Unable to fetch weather.';
  }
};
},{}]},{},[1]);
