import React from 'react';
import { Route, Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf"> 
    <Link to={`/smurfs/${props.id}`}>   
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} years old</p>
      <button onClick={(e => props.deleteSmurf(e, props.id))}>Delete Me I'm annoying</button>
      <button onClick={(e => props.setUpdateForm(e, props))}>Update smurf info</button>
      </Link>
    </div>
    
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

