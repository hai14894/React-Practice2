import React from 'react'

const App = () => {
    return (
        <div class="poke-cards">
            <div class="poke">
                <div class="poke-image" >
                    <img height="100px" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" />
                </div>
        
                <div class="poke-info">
                    <div class="types">grass, poison</div>
                    <div class="height">30cm</div>
                    <div class="weight">15kg</div>
                </div>
                <div class="poke-name">bulbasaur</div>
                <div class="poke-stats">
                    <div class="stat">
                        <strong>attack</strong>: 49
                    </div>
                    <div class="stat">
                        <strong>defense</strong>: 33
                    </div>
                    <div class="stat">
                        <strong>strength</strong>: 67
                    </div>
                </div>
            </div>
            <div class="poke">
                <div class="poke-image" >
                    <img height="100px" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" />
                </div>
        
                <div class="poke-info">
                    <div class="types">electric</div>
                    <div class="height">13cm</div>
                    <div class="weight">20kg</div>
                </div>
                <div class="poke-name">pikachu</div>
                <div class="poke-stats">
                    <div class="stat">
                        <strong>attack</strong>: 32
                    </div>
                    <div class="stat">
                        <strong>defense</strong>: 15
                    </div>
                    <div class="stat">
                        <strong>strength</strong>: 88
                    </div>
                </div>
            </div>
            <div class="poke">
                <div class="poke-image" >
                    <img height="100px" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
                </div>
        
                <div class="poke-info">
                    <div class="types">fire, normal</div>
                    <div class="height">44cm</div>
                    <div class="weight">79kg</div>
                </div>
                <div class="poke-name">charmander</div>
                <div class="poke-stats">
                    <div class="stat">
                        <strong>attack</strong>: 29
                    </div>
                    <div class="stat">
                        <strong>defense</strong>: 47
                    </div>
                    <div class="stat">
                        <strong>strength</strong>: 68
                    </div>
                </div>
            </div>
    </div>
    )
}

export default App