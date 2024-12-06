import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useGetPokeById = () => {
    const [poke, setPoke] = useState([]);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokeById = async () => {
            try {
                const response = await fetch(
                    "https://pokebuildapi.fr/api/v1/pokemon/" + id
                );
                const data = await response.json();
                setPoke(data);
                setIsLoading(false);
                console.table("Poke by id", data);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchPokeById();
    }, []);

    return { poke, isLoading, error };
};  

export default useGetPokeById;