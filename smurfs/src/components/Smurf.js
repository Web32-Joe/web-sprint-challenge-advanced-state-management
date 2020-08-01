import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import SmurfCard from "./SmurfCard";
// import SavedList from "./SavedList";


function Smurf({ addToSavedList, deleteSmurf }) {
  const [smurfs, setSmurfs] = useState([]);
  const {id} = useParams();
  const history = useHistory();

  const fetchSmurf = (id) => {
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then((res) => setSmurfs(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveSmurf = () => {
    addToSavedList(smurfs);
  };

  useEffect(() => {
    fetchSmurf(id);
  }, [id]);

  const handleDelete = e => {
    e.preventDefault();
    axios
    .delete (`http://localhost:3333/smurfs/${smurfs.id}`)
    .then((res) => {
      deleteSmurf(res.data);
      history.push('/');
    })
    .catch(err => console.log('delete err', err))
  }

  if (!smurfs) {
    return <div>Loading smurf information...</div>;
  }

  const handleEdit = e => {
    history.push(`/update-smurfs/${id}`)
  }

  return (
    <div>
      <SmurfCard smurfs={smurfs} />

      <div onClick={saveSmurf}>
        Save
      </div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Smurf;
