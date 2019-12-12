import React, { Component } from "react";
import { useAuth0, Auth0Provider } from "../react-auth0-spa";


import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";
import TimePicker from 'react-bootstrap-time-picker';
import axios from "axios";



class MyForm extends React.Component {

    componentDidMount() {
        console.log(window.myVar)
    }


    constructor(props) {
        super(props);

        this.state = {

            wakeUptime: '',
            bedTime: '',
            work: [],
            school: [],
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
    testerForArry(data) {

        let testArray = this.state;
        let tempArray = [];
        const entries = Object.entries(testArray)
        console.log(entries)

        for (let i = 0; i < entries.length; i++) {
            if (entries[i][1] === '') {
                console.log('else')

            } else {
                tempArray.push(entries[i]);
            }

        }
        this.putDataToDB(tempArray)

        console.log(testArray)
        console.log(tempArray)


        console.log('sent');

    };
    newtesterfunction(data) {
        this.setState({ work: [this.state.mondayWorkStart, this.state.mondayWorkEnd, this.state.tuesdayWorkStart, this.state.tuesdayWorkEnd, this.state.wednesdayWorkStart, this.state.wednesdayWorkEnd, this.state.thursdayWorkStart, this.state.thursdayWorkEnd, this.state.fridayWorkStart, this.state.fridayWorkEnd, this.state.saturdayWorkStart, this.state.saturdayWorkEnd] })
        console.log(this.state.tuesdayWorkStart)
        console.log(this.state.tuesdayWorkEnd)
        console.log(this.state)
    }


    // =======================

    async getUserinfo() {
        console.log('getting user info in getUserInfo()');
        try {
            let response = await fetch('https://dev-c3iq16uz.auth0.com/userinfo', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer' + this.state.token.accessToken,
                },
            });
            let responseJson = await response.json();
            if (responseJson !== null) {
                console.log('Got user info: ' + responseJson.email);
                this.setState({ profile: responseJson });
                console.log(responseJson)
            }
        } catch (error) {
            console.log('Error in retrieving userinfo from Auth0: ' + error.message)
        }
    }
    //   =================
    putDataToDB = message => {
        let idToBeAdded = window.myVar;


        axios.post("http://localhost:3001/api/putData", {
            id: idToBeAdded,
            message: message
        });
    };





    render() {

        return (
            <div>
                <h3>Enter Daily Wakeup Time</h3>
                <input required type="time" value={this.state.wakeUptime} onChange={(event) => { console.log(event.target.value); this.setState({ wakeUptime: event.target.value }) }} />
                <h3>Enter Daily Bed Time</h3>
                <input required type="time" value={this.state.bedTime} onChange={(event) => this.setState({ bedTime: event.target.value })} />
                <h3>Enter Work Schedule</h3>
                <Row>
                    <Col>
                        <h4>Monday</h4>
                        <input type="time" value={this.state.mondayWorkStart[3]} onChange={(event) => this.setState({ mondayWorkStart: ['Wednesday', 'Work', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.mondayWorkEnd[3]} onChange={(event) => { if (event.target.value.replace(/:/g,'') > this.state.mondayWorkStart +event.target.value.replace(/:/g,'')+ this.state.mondayWorkStart) { console.log('error') }else{console.log(event.target.value.replace(/:/g,'')+ this.state.mondayWorkEnd[3])} this.setState({ mondayWorkEnd: ['Wednesday', 'Work', 'End', event.target.value, false] }) }} />
                    </Col>
                    <Col>
                        <h4>Tuesday</h4>
                        <input type="time" value={this.state.tuesdayWorkStart[3]} onChange={(event) => { console.log(this.state); this.setState({ tuesdayWorkStart: ['Tuesday', 'Work', 'Start', event.target.value, false] }) }} />
                        <input type="time" value={this.state.tuesdayWorkEnd[3]} onChange={(event) => this.setState({ tuesdayWorkEnd: ['Tuesday', 'Work', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Wednesday</h4>
                        <input type="time" value={this.state.wednesdayWorkStart[3]} onChange={(event) => this.setState({ wednesdayWorkStart: ['Wednesday', 'Work', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.wednesdayWorkEnd[3]} onChange={(event) => this.setState({ wednesdayWorkEnd: ['Wednesday', 'Work', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Thursday</h4>
                        <input type="time" value={this.state.thursdayWorkStart[3]} onChange={(event) => this.setState({ thursdayWorkStart: ['Thursday', 'Work', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.thursdayWorkEnd[3]} onChange={(event) => this.setState({ thursdayWorkEnd: ['Thursday', 'Work', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Friday</h4>
                        <input type="time" value={this.state.fridayWorkStart[3]} onChange={(event) => this.setState({ fridayWorkStart: ['Friday', 'Work', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.fridayWorkEnd[3]} onChange={(event) => this.setState({ fridayWorkEnd: ['Friday', 'Work', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Saturday</h4>
                        <input type="time" value={this.state.saturdayWorkStart[3]} onChange={(event) => this.setState({ saturdayWorkStart: ['Saturday', 'Work', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.saturdayWorkEnd[3]} onChange={(event) => this.setState({ saturdayWorkEnd: ['Saturday', 'Work', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Sunday</h4>
                        <input type="time" value={this.state.sundayWorkStart[3]} onChange={(event) => this.setState({ sundayWorkStart: ['Sunday', 'Work', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.sundayWorkEnd[3]} onChange={(event) => this.setState({ sundayWorkEnd: ['Sunday', 'Work', 'End', event.target.value, false] })} />
                    </Col>
                </Row>
                <h3>Enter School Schedule</h3>
                <Row>
                    <Col>
                        <h4>Monday</h4>
                        <input type="time" value={this.state.mondaySchoolStart[3]} onChange={(event) => this.setState({ mondaySchoolStart: ['Monday', 'School', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.mondaySchoolEnd[3]} onChange={(event) => this.setState({ mondaySchoolEnd: ['Monday', 'School', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Tuesday</h4>
                        <input type="time" value={this.state.tuesdaySchoolStart[3]} onChange={(event) => this.setState({ tuesdaySchoolStart: ['Tuesday', 'School', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.tuesdaySchoolEnd[3]} onChange={(event) => this.setState({ tuesdaySchoolEnd: ['Tuesday', 'School', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Wednesday</h4>
                        <input type="time" value={this.state.wednesdaySchoolStart[3]} onChange={(event) => this.setState({ wednesdaySchoolStart: ['Wednesday', 'School', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.wednesdaySchoolEnd[3]} onChange={(event) => this.setState({ wednesdaySchoolEnd: ['Wednesday', 'School', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Thursday</h4>
                        <input type="time" value={this.state.thursdaySchoolStart[3]} onChange={(event) => this.setState({ thursdaySchoolStart: ['Thursday', 'School', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.thursdaySchoolEnd[3]} onChange={(event) => this.setState({ thursdaySchoolEnd: ['Thursday', 'School', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Friday</h4>
                        <input type="time" value={this.state.fridaySchoolStart[3]} onChange={(event) => this.setState({ fridaySchoolStart: ['Friday', 'School', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.fridaySchoolEnd[3]} onChange={(event) => this.setState({ fridaySchoolEnd: ['Friday', 'School', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Saturday</h4>
                        <input type="time" value={this.state.saturdaySchoolStart[3]} onChange={(event) => this.setState({ saturdaySchoolStart: ['Saturday', 'School', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.saturdaySchoolEnd[3]} onChange={(event) => this.setState({ saturdaySchoolEnd: ['Saturday', 'School', 'End', event.target.value, false] })} />
                    </Col>
                    <Col>
                        <h4>Sunday</h4>
                        <input type="time" value={this.state.sundaySchoolStart[3]} onChange={(event) => this.setState({ sundaySchoolStart: ['Sunday', 'School', 'Start', event.target.value, false] })} />
                        <input type="time" value={this.state.sundaySchoolEnd[3]} onChange={(event) => this.setState({ sundaySchoolEnd: ['Sunday', 'School', 'End', event.target.value, false] })} />
                    </Col>
                </Row>
                <Button color="primary" className="btn btn-danger float-right mt-4 mb-3" onClick={(event) => { this.newtesterfunction() }}>Submit Schedule</Button>
            </div>
        )


    }
}

export default MyForm;
