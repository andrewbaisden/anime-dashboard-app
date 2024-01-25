import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await fetch(url).then((r) => r.json());
        setIsLoading(false);
        setData(json);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();

    // Polling so that the chart with the most recent changes from the database updates without having to do a page reload anytime a CRUD request is sent to the database
    const pollInterval = setInterval(() => {
      fetchData(); // Fetch data periodically
    }, 2000); // Poll every 2 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(pollInterval);
    };
  }, [url]);

  return { data, error, isLoading };
}
