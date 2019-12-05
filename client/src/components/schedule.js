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
      createTable = () => {
        let table = []
        let temp = []
        const { data } = this.state;
        data.map(dat => temp.push(dat.message))
        let temp2= temp.join(',')
        let temp3= temp2.split(',')
        // console.dir(JSON.stringify().join(","))
console.log(temp.join(','))
        // Outer loop to create parent
        for (let i = 0; i < temp3.length; i++) {
          let children = []
          children.push(<tr className>{temp3[i] }</tr>)

          //Inner loop to create children
          // for (let j = 0; j < 4; j++) {
          // }
          //Create the parent and add the children
          table.push(<td className="results">{children}</td>)
        }
        return table
      }
    
  render() {
    const { data } = this.state;
    console.log(data)
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Currently Generated Schedule:</h2>
        <hr />
    <p></p>
    <table>
        {this.createTable()}
      </table>
      </div>
    );
  }
}

export default Content;
