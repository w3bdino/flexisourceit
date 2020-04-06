import React, { useState, useEffect } from 'react';

export const useGetDataLists = (userid, options) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`http://localhost:4000/api/data`);
          const json = await res.json();
          setResponse(json);
          setIsLoading(false)
        } catch (error) {
          setError(error);
          setIsLoading(false)
        }
      };
      fetchData();
    }, []);

    return { response, error, isLoading };
};