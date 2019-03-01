import React, { Component } from 'react';
import Axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = (event) => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addAnotherSmurf(event, this.state)

    this.setState({
      name: '',
      age: '',
      height: ''
    });
      
  }

  handleInputChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            className='smurfInput'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            className='smurfInput'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            className='smurfInput'
          />
          <button type="submit" className='addBtn'>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
