import React from 'react';

function PlayerCard(props) {
  console.log('PlayerCard: Props: ', props);

  return (
    <div>
      {
        props.players.map(player => (
          <div key={player.id}>
            <h1>{player.name}</h1>
            <p>{player.country}</p>
          </div>
        ))
      }
    </div>
  )
}

export default PlayerCard;