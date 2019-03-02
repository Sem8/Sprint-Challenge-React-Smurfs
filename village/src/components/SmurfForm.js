import React, { Component } from 'react';
import Axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.activeItem || {
      name: '',
      age: '',
      height: ''
    };
  }

  // componentDidUpdate(prevProps) {
  //   if(this.props.activeItem &&
  //     prevProps.activeItem !== this.props.activeItem
  //     ) {
  //       this.setState({ prevProps.activeItem })
  //     }
  // }

  handleChanges = ev => {
    ev.persist();
    let value = ev.target.value;
    if(ev.target.name === 'age') {
        value = parseInt(value, 10);
    }        
    this.setState(prevState => ({        
            ...prevState,
            [ev.target.name]: value        
       }));
};

handleSubmit = e => {
  if (this.props.activeItem) {
      this.props.updateSmurf(e, this.state)
  } else {
      this.props.addAnotherSmurf(e, this.state); 
  }              
  this.setState({
    name: '',
    age: '',
    height: ''
  });
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
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit" className='addBtn' onSubmit={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
