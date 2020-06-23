import React from 'react'
import Poke from './Poke'

const App = () => {
    return (
        <div className="poke-cards">
            <Poke />
            <div className="poke">
                <div className="poke-image" >
                    <img height="100px" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" />
                </div>
        
                <div className="poke-info">
                    <div className="types">electric</div>
                    <div className="height">13cm</div>
                    <div className="weight">20kg</div>
                </div>
                <div className="poke-name">pikachu</div>
                <div className="poke-stats">
                    <div className="stat">
                        <strong>attack</strong>: 32
                    </div>
                    <div className="stat">
                        <strong>defense</strong>: 15
                    </div>
                    <div className="stat">
                        <strong>strength</strong>: 88
                    </div>
                </div>
            </div>
            <div className="poke">
                <div className="poke-image" >
                    <img height="100px" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
                </div>
        
                <div className="poke-info">
                    <div className="types">fire, normal</div>
                    <div className="height">44cm</div>
                    <div className="weight">79kg</div>
                </div>
                <div className="poke-name">charmander</div>
                <div className="poke-stats">
                    <div className="stat">
                        <strong>attack</strong>: 29
                    </div>
                    <div className="stat">
                        <strong>defense</strong>: 47
                    </div>
                    <div className="stat">
                        <strong>strength</strong>: 68
                    </div>
                </div>
            </div>
    </div>
    )
}

export default App