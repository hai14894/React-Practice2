import React from 'react'
import Poke from './Poke'

const App = () => {
    return (
        <div className="poke-cards">
            <Poke
             name="Bulbasaur"
              imgLink="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
              attStat="40"
             />
            <Poke name="Squirtle" imgLink="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" />
            <Poke name="Charmander" imgLink="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
            
    </div>
    )
}

export default App