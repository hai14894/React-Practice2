import React from 'react'

const DefenseStat = (props) => {
    return (
        <div className="stat">
            <strong>defense</strong>: {props.defStat}
        </div>
    )
}

export default DefenseStat