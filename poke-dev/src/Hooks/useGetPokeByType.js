import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const useGetPokeByType = () => {
    const [poke, setPoke] = useState([]);
    const { type } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        const fetchTypePoke = async () => {
        try {
            const response = await fetch(
            "https://pokebuildapi.fr/api/v1/pokemon/type/" + type
            );
            const data = await response.json();
            setPoke(data);
            setIsLoading(false);
            console.table("Poke by type", data);
            console.log(type);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
        };
        fetchTypePoke();
    },
    []);

  return { poke, isLoading, error };
};
  export default useGetPokeByType;