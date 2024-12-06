import { Link } from "react-router-dom"

const PokeCard = ({ poke }) => {
    return (
        <article key={poke.id}>
        <Link to={`/showPoke/${poke.id}`}></Link>
            <img src={poke.image} alt={poke.id} />
            <h3>{poke.slug}</h3>                  
        </article>
    )
}

export default PokeCard