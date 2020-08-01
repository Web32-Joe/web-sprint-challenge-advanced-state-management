import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SmurfForm from "./SmurfForm";
import { SmurfContext } from '../contexts/SmurfContext';
import { FormContext } from "../contexts/FormContext";
import SmurfList from "./SmurfList";
// import SmurfCard from "./SmurfCard";
import {  Route, BrowserRouter as Router} from "react-router-dom";
import EditSmurfForm from "./EditSmurfForm";

function App () {
  
  const [smurfs, setSmurfs] = useState([]);
  const [formValues, setFormValues] = useState('')
  const [smurfList, setSmurfList] = useState([])

  // GET REQUEST
  const getSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
      setSmurfs(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getSmurf()
  }, [])

  const deleteSmurf = smurfId => {
    const updatedSmurfList = smurfList.filter((smurfs) => smurfs.id !== smurfId);
    setSmurfList(updatedSmurfList);
  }

  const updateSmurf = updatedSmurf => {
    const updatedSmurfs = smurfList.map(smurfs => {
      if (smurfs.id === updatedSmurfs.id) {
        return updatedSmurf;
      }
      return smurfs;
    });
    setSmurfList(updatedSmurfs);
  }



    return (
      <SmurfContext.Provider value={{smurfs, setSmurfs, getSmurf}}>
      <FormContext.Provider value={{formValues, setFormValues}}>

      <div className="App">

      <Router>
        
          <Route>
            <SmurfForm exact path='/' />
          </Route>

          <Route>
            <SmurfList exact path='/smurflist' />
          </Route>

          <Route>
            <EditSmurfForm exact path='/editsmurfs/:id' />
          </Route>
      
      </Router>
      </div>
      </FormContext.Provider>

      </SmurfContext.Provider>
    );
  
}

export default App;
