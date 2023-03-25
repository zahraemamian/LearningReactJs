import React, { Component } from 'react';
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


export default class Login extends Component {

  state = {
    username: '',
    password: '',
    output: '',
  }

  render() {
    return (
      <div className="form">
        <p>LOGIN </p>
        <div className="inputDiv">
          <TextField id="outlined-basic" name="username" label="Username" onChange={this.handleChange} variant="outlined" />
        </div>
        <div className="inputDiv">
          <TextField id="outlined-basic" name="password" label="Password" onChange={this.handleChange} variant="outlined" />
        </div>
        <div className="btnDiv">
          <Button variant="contained"
            onClick={this.handleClick}>Submit</Button>
        </div>
        <p>{this.state.output}</p>
      </div>
    );

  }

  handleChange = event => {
    if (event.target.name === "username") {
      this.setState({
        username: event.target.value
      });
    } else if (event.target.name === "password") {
      this.setState({
        password: event.target.value
      });
    }
  }


  handleClick = async () => {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      this.setState({
        output: "you haven't entered username or password"
      });
    } else {
      try {
        const { res } = await axios.post(`http://api.cedalco.com/Users/authenticate`, {
          username: this.state.username,
          password: this.state.password
        });
        this.setState({
          output: "welcome"
        });
      } catch (error) {
        this.setState({
          output: "you have entered wrong username or password"
        });
      }
    }
  }

}
