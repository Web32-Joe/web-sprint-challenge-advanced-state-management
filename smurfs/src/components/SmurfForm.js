import React, { useContext, useEffect } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import { FormContext } from "../contexts/FormContext";
import axios from 'axios';

const initialFormValues = {
    name:'',
    age:'',
    height:'',
    id:''
}

function SmurfForm(){
    // const [formValues, setFormValues] = useState('');
    const {formValues, setFormValues} = useContext(FormContext)
    const {setSmurfs} = useContext(SmurfContext);

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setFormValues({...formValues, [name]:value})
    }

      // POST REQUEST
  const postSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res)
      setSmurfs(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    postSmurf()
  }, [postSmurf])

    const addSmurf = e => {
        e.preventDefault();
        const newSmurf = {
            name: formValues.name,
            age: formValues.age,
            height: formValues.height,
        }
        postSmurf(newSmurf);
        setFormValues(initialFormValues);
    }
    
    return(
        <div>
            <form>
                <label>Name:
                    <input 
                    name='name'
                    type='text'
                    value={formValues.name}
                    onChange={handleChange}
                    />
                </label>
                <label>Age:
                    <input 
                    name='age'
                    type='text'
                    value={formValues.age}
                    onChange={handleChange}
                    />
                </label>
                <label>Height:
                    <input 
                    name='height'
                    type='text'
                    value={formValues.height}
                    onChange={handleChange}
                    />
                </label>
                <button onClick={addSmurf}>Add Smurf</button>
            </form>

        </div>
    )
}

export default SmurfForm;