import { Link } from "react-router-dom";

import useGetTypes from "../../Hooks/useGetTypes";

const RdmTypes = () => {
    const {types, isLoading, error} = useGetTypes();

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
            <h3>Types aléatoires</h3>
            {types.length > 0 ? (
                types.sort(() => Math.random() - 0.5).slice(0,3).map((type) => (
                    <Link to={`/typepoke/${type.name}`}>
                        <article key={type.id}>
                                <img src={type.image} alt={type.id} />
                                <p>{type.name}</p>
                        </article>
                    </Link>
                ))
            ) : (
                <p>Aucun type trouvé</p>
            )}
        </section>
    );
};


export default RdmTypes 