import { useSearchParams, Link } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PokeCardPlus from "../Components/PockeCardPlus/PokeCardPlus";

import useGetAllPoke from "../Hooks/useGetAllPoke";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();  // recup param url
  const query = searchParams.get("query");  // recharge avec l'url corespondant notre comp

  const { pokemon, isLoading } = useGetAllPoke(query); 
  
  if(isLoading) {
    return (
        <>
          <Header />
          <p>En cours de chargement !</p>
          <Footer />
        </>
    );
  }

  if (!isLoading && !pokemon){
    return <main>Aucune pokemon trouvé</main>;
  }

  return (
    <main>
          <Header/>
          <p>Votre résultat:</p>
          {pokemon.map((poke) => (
            <article key={poke.id}>
                <PokeCardPlus key={poke.id} poke = {poke}/>
                <Link to={`/showPoke/${poke.id}`}>Voir poke</Link> 
            </article>
          ))}
        <Footer/>
        </main>
  )
}   

export default SearchResultPage    