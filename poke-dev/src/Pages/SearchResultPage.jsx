import { useSearchParams, Link } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PokeCardPlus from "../Components/PockeCardPlus/PokeCardPlus";

import usePokeSearch from "../Hooks/usePokeSearch";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();  // recup param url
  const query = searchParams.get("query");  // recharge avec l'url corespondant notre comp

  const { poke, isLoading } = usePokeSearch(query); 
  
  if(isLoading) {
    return (
        <>
          <Header />
          <p>En cours de chargement !</p>
          <Footer />
        </>
    );
  }

  if (!isLoading && !poke){
    return <main>Aucune pokemon trouvé</main>;
  }

  return (
    <main>
          <Header/>
          <p>Votre résultat:</p>
            <article key={poke.id}>
                <PokeCardPlus key={poke.id} poke = {poke}/>
            </article>
        <Footer/>
        </main>
  )
}   

export default SearchResultPage    