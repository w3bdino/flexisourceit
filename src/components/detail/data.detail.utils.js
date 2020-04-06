import React, { useState, useEffect } from 'react';

export const useGetDataDetail = (slug) => {
    const [content, setResponse] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`http://localhost:4000/api/data/${slug}`);
          const json = await res.json();
          setResponse(json[0]);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);

    return { content, error, isLoading };
};