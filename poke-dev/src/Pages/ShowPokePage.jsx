import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PokeCardPlus from "../Components/PockeCardPlus/PokeCardPlus";

import useGetPokeById from "../Hooks/useGetPokeById";

const ShowPokePage = () => {
    const {poke, isLoading, error} = useGetPokeById();

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
                <PokeCardPlus key={poke.id} poke = {poke}/>
            </main>
        <Footer />
    </>
  );
};

export default ShowPokePage;