import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PokeCard from "../Components/PockeCardPlus/PokeCardPlus";

import useGetRdmPoke from "../Hooks/useGetRdmPoke";
import { useState } from "react";

const RdmPokePage = () => {

  const [reload, setReload] = useState(false);
    const { poke, isLoading, error } = useGetRdmPoke(reload);  

    const handleClick = () => {
        setReload(!reload);
    }

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
        <button onClick={handleClick}>Trouvez un pokémon</button>
        
            <PokeCard poke={poke} /> 
        
      </main>
      <Footer />
    </>
  );
};

export default RdmPokePage;