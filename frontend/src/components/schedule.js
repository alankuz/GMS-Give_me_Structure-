import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../utils/API";


class Content extends Component {
    state = {
        data:[]
      };
    componentDidMount() {
        this.getDataFromDb();
      }
    
      getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
          .then(data => data.json())
          .then(res => this.setState({ data: res.data }));
      };
    
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Currently Generated Schedule:</h2>
        <hr />
    <p>{this.state.data}</p>
       
      </div>
    );
  }
}

export default Content;
