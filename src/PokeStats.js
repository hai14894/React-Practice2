import React from 'react'
import AttackStat from './Atk-stat'
import DefenseStat from './Def-stat'
import StrengthStat from './Str-stat'

const PokeStats = (props) => {
    return (
                <div className="poke-stats">
                    <AttackStat attStat={props.attStat}/>
                    <DefenseStat/>
                    <StrengthStat/>
                </div>
    )
}
export default PokeStats