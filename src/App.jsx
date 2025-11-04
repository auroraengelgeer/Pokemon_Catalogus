import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchPokemon() {
            try {
                setLoading(true);
                const response = await axios.get(
                    'https://pokeapi.co/api/v2/pokemon/jigglypuff');
                setPokemon(response.data);
            } catch
                (error) {
                console.log(error);
                setError("De Pokemon wil niet uit de Pokebal komen...");
            } finally {
                setLoading(false);
            }
        }

        fetchPokemon();

    }, []);

    if (loading) {
        return <p> Loading... </p>;
    }

    if (error) {
        return <p> Error: {error} </p>;
    }

    return (
        <>
            <section className="pokemon-card">
                <h1 className="pokemon-name">{pokemon.name}</h1>
                <img
                    src={pokemon.sprites?.front_default}
                    alt={pokemon.name}
                    width="180"
                />
                <p className="pokemon-properties-title">
                    moves:
                    <div className="pokemon-property"> {pokemon.moves ? pokemon.moves.length : 0}</div>
                </p>
                <p className="pokemon-properties-title">
                    weight:
                    <div className="pokemon-property"> {pokemon.weight}</div>
                </p>
            </section>
        </>
    )
}

export default App;
