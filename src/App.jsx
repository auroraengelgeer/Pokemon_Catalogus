import './App.css'
import {Route, Routes} from "react-router-dom";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";

function App() {

    return (
        <>
            <main>
                <header>
                    <h1 className="pokedex-title">Pokédex</h1>
                </header>

                <section className="pokemon-card-overview">
                    <PokemonCard name="ditto"/>
                    <PokemonCard name="jigglypuff"/>
                    <PokemonCard name="pikachu"/>
                    <PokemonCard name="bulbasaur"/>

                </section>
            </main>
        </>
    )
}

export default App;
