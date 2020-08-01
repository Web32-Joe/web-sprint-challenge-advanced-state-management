import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const initialSmurfValues = {
    name:'',
    age:'',
    height:'',
    id:''
}

function UpdateSmurf({smurfList, updateSmurf}){
    const {id} = useParams();
    const smurfToUpdate = smurfList.find(
      smurf => smurf.id === Number(id)
    );
    const [formValue, setFormValue] = useState(smurfToUpdate ||initialSmurfValues);
    const history = useHistory();
    const handleChange = e => {
        setFormValue({...formValue, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
          .put(`http://localhost:3333/smurfs/${id}`, formValue)
          .then(resp => {
            updateSmurf(resp.data);
            history.push('/')
          })
          .catch(err => {
              console.log('Error:', err);
          })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input 
                    id='name'
                    name='name'
                    type='text'
                    value={formValue.name}
                    onChange={handleChange}
                    />
                </label>
                <label>Age:
                    <input 
                    id='age'
                    name='age'
                    type='text'
                    value={formValue.age}
                    onChange={handleChange}
                    />
                </label>
                <label>Height:
                    <input 
                    id='height'
                    name='height'
                    type='text'
                    value={formValue.height}
                    onChange={handleChange}
                    />
                </label>
            <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdateSmurf;