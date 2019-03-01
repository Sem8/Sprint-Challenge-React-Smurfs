import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import EachSmurf from './components/EachSmurf';

import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        name: '',
        age: '',
        height: ''
      },
      smurfs: [],
      error: ''
    };
  }  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    // console.log('CDM running');
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      this.setState({ smurfs: res.data });
    })
    .catch(err => {
      // console.log(err);
      this.setState({ error: err });
    });
  };

  addAnotherSmurf = (e, anotherSmurf) => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', anotherSmurf)
    .then(res => {
      this.setState({
        smurfs: res.data
      });
      this.props.history.push('/smurfs');
    })
    .catch(err => {
      console.log(err)
    })
  };

  deleteSmurf(e, id) {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      // console.log(res);
      this.setState({ smurfs: res.data});
      this.props.history.push('/smurfs')
    })
    .catch(err => {
      console.log(err);
    });
  }

  setUpdateForm(e, anotherSmurf) {
    e.preventDefault();
    this.setState({activeItem: anotherSmurf});
    this.props.history.push('/smurf-form');
  };

  updateSmurf = (e, anotherSmurf) => {
    e.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${anotherSmurf.id}`, anotherSmurf)
    .then(res => {
      console.log(res);
      this.setState({
        activeItem: null,
        smurfs: res.data
      })
      this.props.history.push('/smurfs')
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
      <div className="App">

        <NavLink to='/'><button className='homeBtn'>Home</button></NavLink>
        <NavLink to='/smurf-form'><button className='formBtn'>Form</button></NavLink>

        <Route path='/smurf-form' 
        render={ props => <SmurfForm {...props} addAnotherSmurf={this.addAnotherSmurf} updateSmurf={this.updateSmurf} />} 
        />        

        <Route path='/' exact
        render={ props => <Smurfs {...props} deleteSmurf={this.deleteSmurf} smurfs={this.state.smurfs} setUpdateForm={this.setUpdateForm} />} 
        />

        <Route path='/smurfs/:id' render={props => (
          <EachSmurf
            {...props}
            deleteSmurf={this.deleteSmurf}
            smurfs={this.state.smurfs}
            />
        )} />
        
      </div>
    );
  }
}

export default App;




