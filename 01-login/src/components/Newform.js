import React, { Component } from "react";

import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";
import TimePicker from 'react-bootstrap-time-picker';

class MyForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        time: 0,
        wakeUptime:'',
        bedTime:'',
        mondayWorkStart: '',
        mondayWorkEnd: '',
        tuesdayWorkStart: '',
        tuesdayWorkEnd: '',
        wednesdayWorkStart: '',
        wednesdayWorkEnd: '',
        thursdayWorkStart: '',
        thursdayWorkEnd: '',
        fridayWorkStart: '',
        fridayWorkEnd: '',
        saturdayWorkStart: '',
        saturdayWorkEnd: '',
        sundayWorkStart: '',
        sundayWorkEnd: '',
        mondaySchoolStart: '',
        mondaySchoolEnd: '',
        tuesdaySchoolStart: '',
        tuesdaySchoolEnd: '',
        wednesdaySchoolStart: '',
        wednesdaySchoolEnd: '',
        thursdaySchoolStart: '',
        thursdaySchoolEnd: '',
        fridaySchoolStart: '',
        fridaySchoolEnd: '',
        saturdaySchoolStart: '',
        saturdaySchoolEnd: '',
        sundaySchoolStart: '',
        sundaySchoolEnd: '',
      };
    }
   
    handleChange(event) {
        this.setState({title: event.target.value})
      }
      
    render() {
        return (
            <div>
            <h3>Enter Daily Wakeup Time</h3>
            <input type="time"value={this.state.wakeUptime} onChange={(event) => this.setState({wakeUptime: event.target.value})}/>
            <h3>Enter Daily Bed Time</h3>
            <input type="time"value={this.state.bedTime} onChange={(event) => this.setState({bedTime: event.target.value})}/>
            <h3>Enter Work Schedule</h3>
            <Row>
        <Col>
            <h4>Monday</h4>
            <input type="time"value={this.state.mondayWorkStart} onChange={(event) => this.setState({mondayWorkStart: event.target.value})}/>
            <input type="time"value={this.state.mondayWorkEnd} onChange={(event) => this.setState({mondayWorkStart: event.target.value})}/>
            </Col>
            <Col>
            <h4>Tuesday</h4>
            <input type="time"value={this.state.tuesdayWorkStart} onChange={(event) => this.setState({tuesdayWorkStart: event.target.value})}/>
            <input type="time"value={this.state.tuesdayWorkEnd} onChange={(event) => this.setState({tuesdayWorkEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Wednesday</h4>
            <input type="time"value={this.state.wednesdayWorkStart} onChange={(event) => this.setState({wednesdayWorkStart: event.target.value})}/>
            <input type="time"value={this.state.wednesdayWorkEnd} onChange={(event) => this.setState({wednesdayWorkEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Thursday</h4>
            <input type="time"value={this.state.thursdayWorkStart} onChange={(event) => this.setState({thursdayWorkStart: event.target.value})}/>
            <input type="time"value={this.state.thursdayWorkEnd} onChange={(event) => this.setState({thursdayWorkEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Friday</h4>
            <input type="time"value={this.state.fridayWorkStart} onChange={(event) => this.setState({fridayWorkStart: event.target.value})}/>
            <input type="time"value={this.state.fridayWorkEnd} onChange={(event) => this.setState({fridayWorkEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Saturday</h4>
            <input type="time"value={this.state.saturdayWorkStart} onChange={(event) => this.setState({saturdayWorkStart: event.target.value})}/>
            <input type="time"value={this.state.saturdayWorkEnd} onChange={(event) => this.setState({saturdayWorkEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Sunday</h4>
            <input type="time"value={this.state.sundayWorkStart} onChange={(event) => this.setState({sundayWorkStart: event.target.value})}/>
            <input type="time"value={this.state.sundayWorkEnd} onChange={(event) => this.setState({sundayWorkEnd: event.target.value})}/>
            </Col>
            </Row>
            <h3>Enter School Schedule</h3>
            <Row>
        <Col>
            <h4>Monday</h4>
            <input type="time"value={this.state.mondaySchoolStart} onChange={(event) => this.setState({mondaySchoolStart: event.target.value})}/>
            <input type="time"value={this.state.mondaySchoolEnd} onChange={(event) => this.setState({mondaySchoolStart: event.target.value})}/>
            </Col>
            <Col>
            <h4>Tuesday</h4>
            <input type="time"value={this.state.tuesdaySchoolStart} onChange={(event) => this.setState({tuesdaySchoolStart: event.target.value})}/>
            <input type="time"value={this.state.tuesdaySchoolEnd} onChange={(event) => this.setState({tuesdaySchoolEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Wednesday</h4>
            <input type="time"value={this.state.wednesdaySchoolStart} onChange={(event) => this.setState({wednesdaySchoolStart: event.target.value})}/>
            <input type="time"value={this.state.wednesdaySchoolEnd} onChange={(event) => this.setState({wednesdaySchoolEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Thursday</h4>
            <input type="time"value={this.state.thursdaySchoolStart} onChange={(event) => this.setState({thursdaySchoolStart: event.target.value})}/>
            <input type="time"value={this.state.thursdaySchoolEnd} onChange={(event) => this.setState({thursdaySchoolEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Friday</h4>
            <input type="time"value={this.state.fridaySchoolStart} onChange={(event) => this.setState({fridaySchoolStart: event.target.value})}/>
            <input type="time"value={this.state.fridaySchoolEnd} onChange={(event) => this.setState({fridaySchoolEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Saturday</h4>
            <input type="time"value={this.state.saturdaySchoolStart} onChange={(event) => this.setState({saturdaySchoolStart: event.target.value})}/>
            <input type="time"value={this.state.saturdaySchoolEnd} onChange={(event) => this.setState({saturdaySchoolEnd: event.target.value})}/>
            </Col>
            <Col>
            <h4>Sunday</h4>
            <input type="time"value={this.state.sundaySchoolStart} onChange={(event) => this.setState({sundaySchoolStart: event.target.value})}/>
            <input type="time"value={this.state.sundaySchoolEnd} onChange={(event) => this.setState({sundaySchoolEnd: event.target.value})}/>
            </Col>
            </Row>
            <Button color="primary" className="btn btn-danger float-right mt-4 mb-3">Submit Schedule</Button>{' '}
            </div>
            )

        
      }
    }

export default MyForm;
