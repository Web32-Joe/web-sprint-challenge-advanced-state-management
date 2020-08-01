import React, { useContext } from 'react';
import { SmurfContext} from '../contexts/SmurfContext';


function SmurfCard(){
    const {smurfs} = useContext(SmurfContext);

    return(
        <div>
   {smurfs.map((smurfs) => {
    return (
        <div>
       {smurfs.name}
       {smurfs.age}
       {smurfs.height}
       </div>
    );
  })} 
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default SmurfCard;