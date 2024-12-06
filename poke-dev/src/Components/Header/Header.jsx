import { useNavigate, Link } from 'react-router-dom'
import pokeball from '../../assets/pokeball.jpg';

const Header = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => { //info recup du nav 
        event.preventDefault(); // enlève le comportement par défaut du nav qui recharge la page
        const query = event.target.query.value;
        console.log(query);

        navigate("/search/?query="+ query) // charge juste le composent avec nos infos en étant envoyé sur le lien de la recherche
    };


  return (
    <>  
        {/* <img src={pokeball} alt="pokeball"/> */}
        <p>Pokedev</p>
        <nav>
            <ul>
                <Link to={"/"}> Accueil </Link>
                <Link to={"/rdmpoke"}> Pokémon aléatoire </Link>
                <Link to={"/"}> Combat </Link>
            </ul>

            <form method="get" onSubmit={handleSubmit}>
            <label>
                Recherche:
                <input type="text" name="query" placeholder="Rechercher" />
            </label>
                
                <button type="submit">Rechercher</button>
            </form>
        </nav>
    </>
  )
}

export default Header