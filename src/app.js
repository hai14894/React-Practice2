import React from 'react'
import Poke from './Poke'

const App = () => {
    return (
        <div className="poke-cards">
            <Poke
                name="Bulbasaur"
                imgLink="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                attStat="40"
                defStat= "24"
                strStat= "52"
            />
            <Poke
                name="Pikachu"
                imgLink="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
                attStat="45"
                defStat="42"
                strStat= "39"
                />
            <Poke 
                name="Charmander" 
                imgLink="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
                attStat="50"
                defStat="29"
                strStat= "55"
                />
            
    </div>
    )
}

export default App