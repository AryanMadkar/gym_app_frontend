import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// Create the context
const GlobalContext = createContext();

// Global context provider component
export const GlobalProvider = ({ children }) => {
  const [first, setFirst] = useState("hello world");
  const [exercise, setexercise] = useState([]);
  const getexercise = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?muscle=biceps`,
        {
          headers: {
            "X-Api-Key": "xdyuJW/ccA8kUASCtmPwWA==X5FXO8He9FtQG2ik", // Replace with your actual API key
          },
        }
      );

      setexercise(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider value={{ first }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for accessing global context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
