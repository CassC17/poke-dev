import { useState, useEffect } from "react";

const useGetRdmPoke = (reload) => {
  const [poke, setPoke] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRdmPoke = async () => {
      try {
        const response = await fetch(
          "https://pokebuildapi.fr/api/v1/random/team"
        );
        const data = await response.json();
        setPoke(data[0]);
        setIsLoading(false);
        console.table("Rdm poke",data[0]);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchRdmPoke();
  },
  [reload]);

  return { poke, isLoading, error };
};

export default useGetRdmPoke;