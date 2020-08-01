import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./SavedList";
import SmurfList from "./SmurfList";
import Smurf from "./Smurf";
import axios from 'axios';
import UpdateSmurf from './UpdateSmurf';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [smurfList, setSmurfList] = useState([]);
  // const [smurfs, setSmurfs] = useState([]);


  const getSmurfList = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => setSmurfList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = smurf => {
    setSavedList([...savedList, smurf]);
  };

    const deleteSmurf = smurfsId => {
      const updatedSmurfsList = smurfList.filter((smurfs) => smurfs.id !== smurfsId);
      setSmurfList(updatedSmurfsList);
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

  useEffect(() => {
    getSmurfList();
  }, []);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <SmurfList smurfs={SmurfList} />
      </Route>

      <Route path="/smurfs/:id">
        <Smurf addToSavedList={addToSavedList} deleteSmurf={deleteSmurf} />
      </Route>

      <Route path="/update-smurf/:id"
      render={props => ( 
      <UpdateSmurf
        {...props} 
        smurfList={smurfList}
        updateSmurf={updateSmurf}
      />
      )}
        />
    </>
  );
};

export default App;
