import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

import useGetTypes from "../Hooks/useGetTypes";
import { Link } from 'react-router-dom';

const ListTypesPage = () => {
    const { types, isLoading, error } = useGetTypes();

    if (isLoading) {
        return (
            <>
                <Header />
                <p>En cours de chargement !</p>
                <Footer />
            </>
        )
    }

    if (isLoading && listPoke.length === 0) {
        return (
            <>
                <Header />
                <p>Aucun Pokémon trouvé</p>;
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <h1>Les types</h1>
            <section>
            
        
            {types.length > 0 ? (
                <>
                {types.map((type) => (
                    <Link to={`/typepoke/${type.name}`}>
                    <article key={type.id}>
                        
                            <img src={type.image} alt={type.id} />
                            <p>{type.name}</p>
                    </article>
                    </Link>
                ))}
                </>
            ) : (
                <p>Aucun type trouvé.</p>
            )}
            </section>
          <Footer />
        </>
      );
}   

export default ListTypesPage