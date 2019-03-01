import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

export default function EachSmurf({ smurfs, deleteSmurf, match, }) {
  const { id } = match.params;
  const eachSmurf = smurfs.find(smurfAttribute => `${smurfAttribute.id}` === id);
  if(!eachSmurf) {
      return <h3>Loading...</h3>
  }

return (
  <div className='eachSmurfDiv'>
      <h3>{eachSmurf.name}</h3>
      <p>{eachSmurf.height} tall</p>
      <p>{eachSmurf.age} years old</p>
      {/* <button onClick={(e => deleteSmurf(e, eachSmurf.id))}>Delete me I'm annoying</button> */}
    
  </div>
)
}

// export default class EachSmurf extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       smurf: null
//     };
//   }
//   componentDidMount() {
//     const id = this.props.match.params.id;
//     this.fetchSmurf(id);
//   }
//   fetchSmurf = id => {
//     axios.get(`http://localhost:3333/smurfs/${id}`)
//     .then(res => {
//       // console.log(res);
//       this.setState(() => ({smurf: res.data}))
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   };

//   render() {
//     if (!this.state.smurf) {
//       return <div>Loading smurf information...</div>;
//     }
//     const { name, age, height } = this.state.smurf;
//     return (
//       <div>
//         <h3>{name}</h3>
//          <p>{height}</p>
//          <p>{age}</p>
//          <button>Delete me I'm annoying</button>
        
//       </div>
//     )
//   }
// }







