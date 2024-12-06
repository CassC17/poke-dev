import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PokeCardPlus from "../Components/PockeCardPlus/PokeCardPlus";

import useGetPokeByType from "../Hooks/useGetPokeByType";

const ShowPokePage = () => {
    const {pokemon} = useGetPokeByType();

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
            {pokemon.map((poke) => (
                    <PokeCardPlus pokemon={poke} />
            ))}
        </main>
        <Footer />
    </>
  );
};

export default ShowPokePage;