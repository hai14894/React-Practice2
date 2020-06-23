import React from 'react'

const PokeInfo = (props) =>{
    return (
                <div className="poke-info">
                    <div className="types">{props.type}</div>
                    <div className="height">{props.height}</div>
                    <div className="weight">{props.weight}</div>
                </div>
    )
}
export default PokeInfo