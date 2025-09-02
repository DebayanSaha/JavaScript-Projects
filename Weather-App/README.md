# 🌦️ Weather App (Solo Project)

This is a small weather application I built as a solo project to strengthen my understanding of **JavaScript fundamentals** and working with **APIs**.  
The goal wasn’t just to make something that works, but to practice DOM manipulation, event handling, fetch API usage, and error handling in a real-world scenario.

---

## Features
- Search weather by **city name**.
- Fetches live weather data from the **OpenWeatherMap API**.
- Displays:
  - Temperature (°C)
  - Feels like (°C)
  - Humidity (%)
  - Visibility (in km)
  - Rain (mm, or fallback text if none)
  - Weather condition (e.g., "clear sky")
- **Search with Enter key** or click the button.
- Shows **city + country** to confirm the location.
- Handles:
  - Empty input (prompts user to enter a city).
  - Invalid city names (error message shown).
  - Loading state while fetching data.

---

## Tech Used
- **HTML5** – structure of the app.  
- **CSS3** – basic styling (minimal for focus on JS).  
- **Vanilla JavaScript (ES6+)** – core logic:
  - `querySelector` for DOM selection.
  - `addEventListener` for handling button click & Enter key.
  - `fetch` API to get weather data.
  - Promises (`.then` / `.catch`) for async handling.

---

## What I Practiced
This project was about **mastering JavaScript basics by building something tangible**:
- DOM manipulation (updating multiple elements dynamically).
- Event handling (button click + keyboard input).
- Working with REST APIs and handling JSON data.
- Error handling (`try/catch` via `.catch` and checking API responses).
- Cleaning and validating user input with `.trim()`.

---

## How It Works
1. User enters a city name in the input field.  
2. On click (or pressing Enter), the app fetches data from OpenWeatherMap.  
3. Weather details are displayed on the page.  
4. If something goes wrong (like invalid city), an error message is shown.

---

## Demo
- <img width="1916" height="926" alt="image" src="https://github.com/user-attachments/assets/bd6dda7d-11c4-418c-a383-beac6c6a1da6" />
 
- Edge Case Handleing:
  - Wrong name 
        <img width="300" alt="image" src="https://github.com/user-attachments/assets/0dcce414-431c-4bcf-9446-62670e4c7cfc" />
  - Blank input 
        <img width="300" alt="image" src="https://github.com/user-attachments/assets/bafb7581-1405-41be-aa07-64e86e1b7d8b" />
 
---

## Why This Project
I wanted a **hands-on project** where I could apply everything I’ve been learning in JavaScript.  
Weather apps are perfect because:
- They use real-time data (API practice).
- They require multiple DOM updates.
- They need proper error handling (invalid city names, empty input, etc.).

This project gave me a stronger grip on **asynchronous JavaScript** and **clean DOM updates**.

---
