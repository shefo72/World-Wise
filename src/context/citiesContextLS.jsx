/*
 * ============================================================================
 *                        NOTE: LOCAL STORAGE VERSION
 * ============================================================================
 * This file uses the browser's localStorage to persist data. It was created
 * to allow the project to be deployed online (e.g., on Vercel or Netlify)
 * without needing a real backend database.
 * * The original context file ('citiesContext.jsx') in this same folder uses
 * a local API (json-server) for fetching and mutating data. That API version
 * requires the local server to be running and will NOT work in production.
 * ============================================================================
 */

import { createContext, useEffect, useContext, useReducer } from "react";
const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter(
          (city) => String(city.id) !== String(action.payload),
        ),
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type...");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const saveToLocalStorage = (newCities) => {
    localStorage.setItem("citiesData", JSON.stringify(newCities));
  };

  useEffect(() => {
    function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const storedCities = localStorage.getItem("citiesData");
        const data = storedCities ? JSON.parse(storedCities) : [];
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an Error Loading data...",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    if (String(id) === String(currentCity.id)) return;
    dispatch({ type: "loading" });
    try {
      const storedCities = JSON.parse(localStorage.getItem("citiesData")) || [];
      const data = storedCities.find((city) => String(city.id) === String(id));

      if (data) {
        dispatch({ type: "city/loaded", payload: data });
      } else {
        throw new Error("City not found");
      }
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an Error Loading city data...",
      });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const cityWithId = { ...newCity, id: Date.now() };

      const storedCities = JSON.parse(localStorage.getItem("citiesData")) || [];
      const updatedCities = [...storedCities, cityWithId];

      saveToLocalStorage(updatedCities);

      dispatch({ type: "city/created", payload: cityWithId });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an Error in Creating The City...",
      });
    }
  }

  async function deleteCity(cityId) {
    dispatch({ type: "loading" });
    try {
      const storedCities = JSON.parse(localStorage.getItem("citiesData")) || [];
      const updatedCities = storedCities.filter(
        (city) => String(city.id) !== String(cityId),
      );

      saveToLocalStorage(updatedCities);

      dispatch({ type: "city/deleted", payload: cityId });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an Error in Deleting City...",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        error,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
