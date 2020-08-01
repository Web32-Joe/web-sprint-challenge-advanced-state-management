import React, { useContext} from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfCard from "./SmurfCard";

function SmurfList() {
    const {smurfs} = useContext(SmurfContext);

    return(
        <div>
    {smurfs.map((smurfs) => {
    return (
        <SmurfCard />
    );
  })}
        </div>
    )
}

export default SmurfList;