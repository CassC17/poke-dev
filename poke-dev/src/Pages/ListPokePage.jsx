import { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const ListPokePage = () => {
    const [listPoke, setListPoke] = useState([null]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(listPoke);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v1/pokemon')
            .then((response) => response.json())
            .then((data) => {
                setListPoke(data);
                setIsLoading(false);
            });
    }, []);
   
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
    <main>
        <Header />
        <h1>Liste des pokémons</h1>
        <section>
            {listPoke.map((poke) => (
                <article key={poke.id}>
                    <img src={poke.image} alt={poke.id} />
                    <h3>{poke.slug}</h3>
                    <ul>
                        <li>Génération: {poke.apiGeneration}</li>
                        <li>Types: {poke.apiTypes.map((type) => type.apiTypes.name).join(', ')}</li>
                        <li>Résistances: {poke.apiResistances.map((res) => res.name).join(', ')}</li>
                        <li>Stats: {poke.stats.map((stat) => stat).join(', ')}</li>
                    </ul>                    
                </article>
            ))}
        </section>
        <Footer />
    </main>
  )
} 

export default ListPokePage