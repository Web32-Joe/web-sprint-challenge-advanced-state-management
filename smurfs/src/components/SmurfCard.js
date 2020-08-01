import React from 'react';

const SmurfCard = props => {
  const {name, age, height, smurfs } = props.smurfs;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        Age: <p>{age}</p>
      </div>
      <div>
        Height: <p>{height}</p>
      </div>
      

      {smurfs.map(smurfs => (
        <div key={smurfs}>
          {smurfs}
        </div>
      ))}
    </div>
  );
};

export default SmurfCard;
