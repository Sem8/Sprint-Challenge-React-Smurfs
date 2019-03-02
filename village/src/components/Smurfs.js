import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div className='SmurfsList'>
        
          <ul>
            {this.props.smurfs.map(smurf => {
              return (                         
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  deleteSmurf={this.props.deleteSmurf}
                  setUpdateForm={this.props.setUpdateForm}
                />
              );
            })}
          </ul>
        </div>        
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
