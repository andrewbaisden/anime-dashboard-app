import { useState } from 'react';

export function useDelete() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const deleteRequest = async (url) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();

      if (response.ok) {
        setResponse(responseData);
      } else {
        setError(responseData);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, response, deleteRequest };
}
