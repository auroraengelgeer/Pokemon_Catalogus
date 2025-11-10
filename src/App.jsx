import './App.css'
import {Route, Routes} from "react-router-dom";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    const [previousUrl, setPreviousUrl] = useState(null);

    useEffect(() => {
        async function getPokemonData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
                setPokemonList(response.data.results);
                setNextUrl(response.data.next)
                setPreviousUrl(response.data.previous)
            } catch (error) {
                console.error(error)
            }
        }

        getPokemonData();

    }, []);

    async function fetchNextPage() {
        try {
            const response = await axios.get(nextUrl)
            setPokemonList(response.data.results);
            setNextUrl(response.data.next)
            setPreviousUrl(response.data.previous)
        } catch (error) {
            console.error(error)
        }
    }

    async function fetchPreviousPage() {
        try {
            const response = await axios.get(previousUrl)
            setPokemonList(response.data.results);
            setNextUrl(response.data.next)
            setPreviousUrl(response.data.previous)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <main>
                <header>
                    <h1 className="pokedex-title">Pokédex</h1>
                </header>
                <div className="page-button-container">
                    <button className="page-button" type="button" onClick={fetchPreviousPage}
                            disabled={!previousUrl}>Previous
                    </button>
                    <button className="page-button" type="button" onClick={fetchNextPage}
                            disabled={!nextUrl}>Next
                    </button>
                </div>
                <section className="pokemon-card-overview">
                    {pokemonList.map((pokemon) => (
                        <PokemonCard key={pokemon.name} name={pokemon.name}/>
                    ))}

                </section>

            </main>
        </>
    )
}

export default App;
