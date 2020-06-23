import React from 'react'
import PokeInfo from './PokeInfo'
import PokeStats from './PokeStats'

const Poke = (props) =>{
    
    return (
            <div className="poke">
                <div className="poke-image" >
                    <img height="100px" src={props.imgLink} />
                </div>
        
                <PokeInfo/>
                <div className="poke-name">{props.name}</div>
                <PokeStats attStat={props.attStat}/>
            </div>
    )
}

export default Poke