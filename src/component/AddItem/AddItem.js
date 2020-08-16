import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  state = {
    description: "",
  };

  handleChange = (e) => {
    //console.log(e);
    //console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log(this.state);
    
    this.props.addItem(this.state);
    this.setState({
      description: "Random text",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
     console.log(this.state);
   if(this.state.description === ''){
    console.log('false');
   }else{
    this.props.addItem(this.state);
    this.setState({
      description: "",
    });
   }
  };
 
  render() {
    return (
      <div>
        <p> You have used 99999 seconds on this website</p>
        <input className="submit"  type="submit"  value="Random text"  onClick={this.handleClick} />
         <br />
        <input  type="text" placeholder="Enter description"  id="description"  onChange={this.handleChange}  value={this.state.description} />
        <input className="submit" type="submit" value="Add" onClick={this.handleSubmit} />
      </div>
    );
  }
}
export default AddItem;
