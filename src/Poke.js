import React from 'react'
import PokeInfo from './PokeInfo'
import PokeStats from './PokeStats'

const Poke = () =>{
    return (
            <div className="poke">
                <div className="poke-image" >
                    <img height="100px" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" />
                </div>
        
                <PokeInfo/>
                <div className="poke-name">bulbasaur</div>
                <PokeStats/>
            </div>
    )
}

export default Poke