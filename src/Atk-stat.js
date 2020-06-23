import React from 'react'

const AttackStat = (props) => {
    return (
        <div className="stat">
            <strong>attack</strong>: {props.attStat}
        </div>
    )
}

export default AttackStat