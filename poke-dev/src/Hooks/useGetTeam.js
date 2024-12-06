
import { useState, useEffect } from "react";

const useGetTeam = () => { 
    const [team, setTeam] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchRdmTeam = async () => {
          try {
            const response = await fetch(
              "https://pokebuildapi.fr/api/v1/random/team"
            );
            const data = await response.json();
            setTeam(data);
            setIsLoading(false);
            console.table("Rdm team",data);
          } catch (error) {
            setError(error);
            setIsLoading(false);
          }
        };
    fetchRdmTeam();
      },
      []);
    
    return { team, isLoading, error };
};

export default useGetTeam;