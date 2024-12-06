import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PokeCard from "../Components/PockeCardPlus/PokeCardPlus";

import useGetRdmPoke from "../Hooks/useGetRdmPoke";

const RdmPokePage = () => {
    const { poke, isLoading, error } = useGetRdmPoke();  

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
      <h1>Pokémon aléatoire</h1>
      <main>
        <button onClick={useGetRdmPoke}>Trouvez un pokémon</button>
        {poke.map((poke) => (
            <PokeCard key={poke.id} poke={poke} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default RdmPokePage;