import { useState, useEffect } from "react";

const usePokeSearch = (query = null) => {
  const [poke, setPoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = "https://pokebuildapi.fr/api/v1/pokemon/";
    if (query) {
      url += query;
    } 

    const fetchPoke = async () => {
      try {
        const response = await fetch(
          url
        );
        const data = await response.json();
        setPoke(data);
        setIsLoading(false);
        console.log("Search poke",data);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchPoke();
  },
  [query]);

  return { poke, isLoading, error };
};

export default usePokeSearch;