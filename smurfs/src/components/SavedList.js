import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SavedList({ list, smurfs }) {
  return (
    <div>
      <h3>Saved Smurfs:</h3>
      {list.map(smurfs => {
        return (
          <NavLink
            to={`/smurfs/${smurfs.id}`}
            key={smurfs.id}
          >
            <span>{smurfs.name}</span>
          </NavLink>
        );
      })}
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default SavedList;
