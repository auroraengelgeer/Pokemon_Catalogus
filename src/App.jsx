import './App.css'
import {Route, Routes} from "react-router-dom";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";

function App() {

    return (
        <>
            <header>
                <h1 className="pokedex-title">Pokédex</h1>
            </header>
            <main>
                <section className="pokemon-card-overview">
                    <PokemonCard name="ditto"/>
                    <PokemonCard name="jigglypuff"/>
                </section>

            </main>
        </>
    )
}

export default App;
