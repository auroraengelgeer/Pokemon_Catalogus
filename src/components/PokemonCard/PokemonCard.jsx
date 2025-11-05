import {useEffect, useState} from "react";
import axios from "axios";
import './PokemonCard.css'

function PokemonCard({name}) {

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchPokemon() {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${name}`);
                setPokemon(response.data);
            } catch
                (error) {
                console.log(error);
                setError(`De Pokémon ${name} wil niet uit de Pokébal komen...`);
            } finally {
                setLoading(false);
            }
        }

        fetchPokemon();

    }, []);

    if (loading) {
        return <p> Loading {name}... </p>;
    }

    if (error) {
        return <p> Error: {error} </p>;
    }

    return (
        <>
            <article className="pokemon-card">
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
                <p className="abilities">
                    Abilities:
                    <ul className="pokemon-abilities-list"> {pokemon.abilities ? pokemon.abilities.slice(0, 3).map((abilityObj) => (
                            <li className="pokemon-ability" key='abilityObj.ability.name'>
                            {abilityObj.ability.name}
                                {" "}
                        </li>
                        ))
                        : <li>Geen abilities gevonden</li> }
                    </ul>
                </p>
            </article>
        </>
    );
}


export default PokemonCard;