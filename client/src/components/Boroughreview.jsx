import React, {Component} from 'react';
import {ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Boroughreview extends Component{
render(){
    return(
      <div className="BoroughReview-div">
        <div> 
          <h2>{ this.props.name }</h2>
          <p>{ this.props.review }</p>
        </div>
        <form>
          <input type="submit" value="Edit" />
          <input type="submit" value="Delete" />
        </form>
      </div>
    );
  }
}

export default Boroughreview; 