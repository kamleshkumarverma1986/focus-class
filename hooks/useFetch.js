import { useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (options) => {
    try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(url, options);
        console.log("main response", response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setIsLoading(false);
        setData(json);
        setError(null);
    } catch (error) {
        setError({
          isSuccess: false,
          message: error.message,
        });
        setIsLoading(false);
    }
  }
  
  return [callApi, isLoading, data, error]
};