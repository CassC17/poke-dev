import { useState, useEffect } from "react";

const useGetAllPoke = () => {
  const [poke, setPoke] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllPoke = async () => {
      try {
        const response = await fetch(
          "https://pokebuildapi.fr/api/v1/pokemon"
        );
        const data = await response.json();
        setPoke(data);
        setIsLoading(false);
        console.log("All poke",data);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchAllPoke();
  },
  []);

  return { poke, isLoading, error };
};

export default useGetAllPoke;