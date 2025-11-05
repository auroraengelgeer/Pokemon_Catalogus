import './App.css'
import {Route, Routes} from "react-router-dom";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function getPokemonData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
                setPokemonList(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }

        getPokemonData();

    }, []);


    return (
        <>
            <main>
                <header>
                    <h1 className="pokedex-title">Pokédex</h1>
                </header>

                <ul>
                    <li>

                    </li>
                </ul>

                <section className="pokemon-card-overview">
                    <PokemonCard name="ditto"/>
                    <PokemonCard name="jigglypuff"/>
                    <PokemonCard name="pikachu"/>
                    <PokemonCard name="bulbasaur"/>

                </section>

                <ul>
                    <li className="pokemon-name">
                        {pokemonList.map((pokemon) => (
                            <li key={pokemon.id}>{pokemon.name}</li>
                        ))}
                    </li>
                </ul>
            </main>
        </>
    )
}

export default App;
