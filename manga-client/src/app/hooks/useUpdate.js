import { useState } from 'react';

export function useUpdate() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const updateRequest = async (url, formData) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const response = await fetch(url, {
        method: 'PUT',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
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

  return { isLoading, error, response, updateRequest };
}
