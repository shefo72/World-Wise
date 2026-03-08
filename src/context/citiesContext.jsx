import { createContext, useEffect, useState, useContext } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, SetCities] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  // Fetch All Cities from the API
  useEffect(() => {
    async function fetchCities() {
      try {
        SetIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        SetCities(data);
      } catch {
        console.log("There was an Error Loadin data...");
      } finally {
        SetIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  // Fetch Specific City From The API
  async function getCity(id) {
    try {
      SetIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      console.log("There was an Error Loading data...");
    } finally {
      SetIsLoading(false);
    }
  }

  // Add New City To Our data
  async function createCity(newCity) {
    try {
      SetIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      SetCities((cities) => [...cities, data]);
    } catch {
      console.log("There was an Error in Sending data...");
    } finally {
      SetIsLoading(false);
    }
  }

  // Delete City
  async function deleteCity(cityId) {
    try {
      SetIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${cityId}`, {
        method: "DELETE",
      });

      SetCities((cities) =>
        cities.filter((city) => {
          return city.id !== cityId;
        }),
      );
    } catch {
      console.log("There was an Error in Deleteing city...");
    } finally {
      SetIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
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
