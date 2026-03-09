# 🌍 WorldWise

A global map tracking application that allows users to keep track of their travels. Users can click anywhere on the interactive map to add a city to their visited list, add notes, and track the countries they've explored.

🔗 **Live Demo:** [https://world-wise-lilac-five.vercel.app/](https://world-wise-lilac-five.vercel.app/)

---

## ✨ Features

- **Interactive Map** Built using **Leaflet** and **React-Leaflet**. Users can click anywhere on the map to add a new city.
- **Reverse Geocoding** Automatically retrieves city and country names from coordinates using the **BigDataCloud API**.
- **Geolocation** Allows users to quickly navigate to their **current location** with one click.
- **Travel History** Track all visited cities and see a list of **countries you've explored**.

- **State Management** Global state handled with **React Context API + useReducer**.
- **Authentication (Mock)** Simple **fake authentication system** implemented using React Context.
- **Data Persistence** Cities data is stored using **localStorage in production** so the app works without a backend.

---

## 🛠️ Tech Stack

| Technology                  | Purpose                      |
| --------------------------- | ---------------------------- |
| **React 18**                | Frontend framework           |
| **Vite**                    | Fast build tool              |
| **React Router v6**         | Routing and navigation       |
| **Leaflet + React-Leaflet** | Interactive maps             |
| **CSS Modules**             | Component-scoped styling     |
| **Notyf**                   | Toast notifications          |
| **React-DatePicker**        | Date input handling          |
| **json-server**             | Mock backend for development |

---

## 📂 Project Architecture

```text
src
 ┣ components
 ┣ context
 ┃ ┣ AuthContext.jsx
 ┃ ┣ citiesContext.jsx
 ┃ ┗ citiesContextLS.jsx
 ┣ hooks
 ┃ ┣ useGeolocation.js
 ┃ ┗ useUrlPosition.js
 ┣ pages
 ┃ ┣ Homepage.jsx
 ┃ ┣ Product.jsx
 ┃ ┣ Pricing.jsx
 ┃ ┣ Login.jsx
 ┃ ┣ PageNotFound.jsx
 ┃ ┣ ProtectedRoute.jsx
 ┃ ┗ AppLayout.jsx
 ┗ data
   ┗ cities.json
```

---

## 💾 Data Handling (API vs LocalStorage)

This project includes **two implementations for managing cities data** depending on the environment.

### 1️⃣ Production Mode (Used in the Live Demo)

The deployed application uses **LocalStorage** to store cities data.

- **File used:** `context/citiesContextLS.jsx`

_All cities added by the user are stored in the browser storage._

### 2️⃣ Development Mode (API Version)

The project also includes a complete API-based version that performs CRUD operations using `fetch()`.

- **File available:** `context/citiesContext.jsx`

This version connects to a local REST API powered by `json-server`.

#### Running the Fake API

Start the development API with:

```bash
npm run server
```

This runs: json-server --watch data/cities.json --port 9000

- The API will be available at: http://localhost:9000/cities

- Cities data will be stored inside: data/cities.json

  To switch modes, simply change the imported provider in your app.

**Example:**

From :

```javascript
import { CitiesProvider } from "./context/citiesContextLS";
```

To :

```javascript
import { CitiesProvider } from "./context/citiesContext";
```

---

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/shefo72/World-Wise.git
```

2. **Navigate into the project folder:**

```bash
cd World-Wise
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the Development Server**

```bash
npm run dev
```

App will run at: http://localhost:5173

5. **(Optional) Run the Fake API for development:**

```bash
npm run server
```
