import { useState, useEffect } from "react";

const useGetTypes = () => {
    const [types, setTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await fetch(
                    "https://pokebuildapi.fr/api/v1/types"
                );
                const data = await response.json();
                setTypes(data);
                setIsLoading(false);
                console.table("Types", data);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchTypes();
    },
    []);

    return { types, isLoading, error };
};

export default useGetTypes;