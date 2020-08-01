import React, { useContext } from 'react';
// import { SmurfContext } from '../contexts/SmurfContext';
// import SmurfCard from "./SmurfCard";
import { FormContext } from '../contexts/FormContext';



function EditSmurfForm() {
    // const {smurfs} = useContext(SmurfContext);
    const {formValues, setFormValues} = useContext(FormContext);

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setFormValues({...formValues, [name]:value})
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
            </form>
        </div>
    )
}


export default EditSmurfForm;