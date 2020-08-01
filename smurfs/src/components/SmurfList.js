import React from "react";
import { Link } from "react-router-dom";
import SmurfCard from "./SmurfCard";

function SmurfList({ smurfs }) {
  return (
    <div>
      {
        smurfs.map(smurf => (
          <Link key={smurf.id} to={`/smurfs/${smurf.id}`}>
            <SmurfCard smurfs={smurfs} />
          </Link>
        ))
      }
    </div>
  );
}

export default SmurfList;
