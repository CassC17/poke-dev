import useGetTeam from '../Hooks/useGetTeam';

import PokeCard from '../Components/PokeCard/PokeCard';

const RdmTeam = () => {
    const {team, isLoading, error} = useGetTeam();

    if (isLoading) {
        return (
            <>
              <p>En cours de chargement !</p>
            </>
        );
    }

    if (error) {
        return (
            <>
              <p>Erreur: {error.message}</p>;
            </>
          );
    }   
    
    return (
        <section>
        <h3>Team aléatoire</h3>
        {team.length > 0 ? (
            <>
            {team.map((pokemon) => (
                <PokeCard key={pokemon.id} poke={pokemon} />
            ))}
            </>
        ) : (
            <p>Aucune team trouvée.</p>
        )}
    </section>
    );
};

  export default RdmTeam

