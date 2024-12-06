import { use } from "react";

const useGetPokeByGen = () => {
    const [poke, setPoke] = useState([]);
    const { gen } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        const fetchPokeByGen = async () => {
        try {
            const response = await fetch(
            "https://pokebuildapi.fr/api/v1/pokemon/generation/" + gen
            );
            const data = await response.json();
            setPoke(data);
            setIsLoading(false);
            console.table("Poke by gen", data);
            console.log(gen);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
        };
        fetchPokeByGen();
    },
    []);

  return { poke, isLoading, error };
}; 

export default useGetPokeByGen