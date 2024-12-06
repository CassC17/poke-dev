import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

import useGetAllPoke from '../Hooks/useGetAllPoke';
import PokeCardPlus from '../Components/PockeCardPlus/PokeCardPlus';

const ListPokePage = () => {
    const { poke, isLoading, error } = useGetAllPoke();

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
            <h1>Gen 1</h1>
            {poke.slice(0,151).map((poke) => (
                <article key={poke.id}>
                    <PokeCardPlus key={poke.id} poke={poke} />
                </article>
            ))}
        </section>
        <section>
            <h1>Gen 2</h1>
            {poke.slice(151,251).map((poke) => (
                <article key={poke.id}>
                    <PokeCardPlus key={poke.id} poke={poke} />
                </article>
            ))}
        </section>
        <section>
            <h1>Gen 3</h1>
            {poke.slice(251,386).map((poke) => (
                <article key={poke.id}>
                    <PokeCardPlus key={poke.id} poke={poke} />
                </article>
            ))}
        </section>
        <section>
            <h1>Gen 4</h1>
            {poke.slice(386,497).map((poke) => (
                <article key={poke.id}>
                    <PokeCardPlus key={poke.id} poke={poke} />
                </article>
            ))}
        </section>
        <section>
            <h1>Gen 5</h1>
            {poke.slice(497, 649).map((poke) => (
                <article key={poke.id}>
                    <PokeCardPlus key={poke.id} poke={poke} />
                </article>
            ))}
        </section>
        <section>
            <h1>Gen 6</h1>
            {poke.slice(649,721).map((poke) => (
                <article key={poke.id}>
                    <PokeCardPlus key={poke.id} poke={poke} />
                </article>
            ))}
        </section>
        <section>
            <h1>Gen 7</h1>
            {poke.slice(721,809).map((poke) => (
                <article key={poke.id}>
                    <PokeCardPlus key={poke.id} poke={poke} />
                </article>
            ))}
        </section>
        <section>
            <h1>Gen 8</h1>
            {poke.slice(809,898).map((poke) => (
                <article key={poke.id}>
                    <PokeCardPlus key={poke.id} poke={poke} />
                </article>
            ))}
        </section>
        <Footer />
    </main>
  )
} 

export default ListPokePage