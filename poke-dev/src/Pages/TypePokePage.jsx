import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PokeCard from "../Components/PokeCard/PokeCard";

import useGetPokeByType from "../Hooks/useGetPokeByType";

const TypePokePage = () => {
    const {poke, isLoading, error} = useGetPokeByType();
    console.log(poke);

    if (isLoading) {
        return (
            <>
            <Header />
            <p>En cours de chargement !</p>
            <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
            <Header />
            <p>Erreur: {error.message}</p>;
            <Footer />
            </>
        );
    }   

  return (
    <>
        <Header />
        <main key={poke.id}>
            {poke.map((pokemon) => (
                    <PokeCard key={pokemon.id} poke={pokemon} />
            ))}
        </main>
        <Footer />
    </>
  );
};

 

export default TypePokePage