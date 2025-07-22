# 🌤️ WeatherX - JavaScript Weather & Greeting App

WeatherX is a simple frontend-focused weather app built with vanilla JavaScript. It displays the current weather. This version integrates with [wttr.in](https://wttr.in); a free, no-auth weather API, instead of OpenWeatherMap.

---

This project is part of a [comprehensive series](url) aimed at guiding developers and DevOps engineers through a complete and practical journey into CI/CD using GitHub Actions.

The live version of the app is available [here](https://doyinhubx.github.io/weather-runner/)

Here are links to each part of the series:

1. [GitHub Actions Deep Dive: A CI/CD Introduction](url)
2. [How to Build a Weather Dashboard with HTML and JavaScript](url)
3. [Continuous Integration for Node.js Apps Using GitHub Actions](url)
4. [Advanced CI/CD Workflows with Docker, Linting, and Git Hooks](url)
5. [Advanced CI/CD Automation: Job Caching, Matrix Builds, and Conditional Deployments](url)
6. [Building a CI/CD Pipeline for GitHub Pages with GitHub Actions](url)
7. [Empower yourself for Production Readiness](url)


## 🚀 Features

- Fetch and display current weather of cities around the world
- Simple DOM manipulation and modular file structure
- Uses `browserify` to bundle CommonJS modules
- Development server with live rebuild via `watchify`

---

## 📁 Project Structure (for this guide)

```
weather-app/
├── public/ # Static assets served to the browser
│ ├── index.html # Main HTML UI
│ ├── styles.css # App styling
│ └── bundle.js # Bundled JavaScript (auto-generated)
├── src/ # Application source code
│ ├── main.js # App entry point
│ ├── services/ # API calls or mock data
│ │ ├── currentWeather.js
│ │ └── forecast.js
│ ├── utils/ # DOM utilities
│ │ └── dom.js
│ └── data/ # Static/mock data (optional fallback)
│ ├── current.json
│ └── forecast.json
├── server.js # Express server
├── package.json # Project metadata & scripts
└── README.md # You're here!
```


---

## 🔧 Setup & Usage

```bash
# 1. Clone the Repo
git clone https://github.com/your-username/weather-app.git
cd weather-app

# 2. Install Dependencies
npm install

# 3. Run in Dev Mode
npm run dev
```
Runs the backend on http://localhost:5000

Watches for changes in `main.js` and rebuilds `bundle.js`

## 📦 Available Scripts

Command	Description

npm run build	Bundle JS manually via Browserify
npm run watch	Watch & rebuild JS using Watchify
npm start	Run the Express backend
npm run dev	Watch + serve in one step (for development)


🛡️ License
MIT © 2025 [Doyin ELUGBADEBO](url)