import React, { Component } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Progress } from 'reactstrap'




export default class Agenda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            color1:0,
            color2:0,
            color3:0,
            color4:0,
            color5:0,
            totalColorCount:0
        }
    }

    componentDidMount() {

        // this.setState({items:items})
        this.getDataFromDb()
        // this.putDataToDB();



    }
    getDataFromDb = () => {
        const userId = localStorage.getItem('account');
        console.log(userId);
        fetch("/api/getData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: userId })
        })
            .then(data => data.json())
            .then(res => {
                // console.log(this.state.items); 
                console.log(res.data[0]);


                if (!res.data[0]) { console.log('nothing') } else {
                    var temp = res.data[0].message
                    for (let i = 0; i < temp.length; i++) {
                        temp[i].endDateTime = new Date(temp[i].endDateTime)
                        temp[i].startDateTime = new Date(temp[i].startDateTime)
                        console.log(temp)
                        this.setState({color1:0})
                        this.setState({color2:0})
                        this.setState({color3:0})
                        this.setState({color4:0})
                        this.setState({color5:0})
                        this.setState({totalColorCount:0})
                        let count=0
                        for(let i=0;i<temp.length;i++) {
                            
                            if(temp[i].classes === 'color-1') {
                                console.log('color1')
                                this.setState(({ color1 }) => ({
                                    color1: color1 + 1
                                  }))  
                                  count=count+1
                                  console.log(this.state.color1)
                            }
                            if(temp[i].classes === 'color-2') {
                                console.log('color2')
                                this.setState(({ color2 }) => ({
                                    color2: color2 + 1
                                  }))
                                  count=count+1
                                  console.log(this.state.color2)
                            }
                            if(temp[i].classes === 'color-3') {
                                console.log('color3')
                                this.setState(({ color3 }) => ({
                                    color3: color3 + 1
                                  }))
                                  count=count+1
                                  console.log(this.state.color3)
                            }
                            if(temp[i].classes === 'color-4') {
                                console.log('color4')
                                this.setState(({ color4 }) => ({
                                    color4: color4 + 1
                                  }))
                                  count=count+1
                                  console.log(this.state.color4)
                            }
                            if(temp[i].classes === 'color-5') {
                                console.log('color5')
                                this.setState(({ color5 }) => ({
                                    color5: color5 + 1
                                  }))
                                  count=count+1
                                  console.log(this.state.color5)
                            }
                            if(i===temp.length-1){
                                this.setState({totalColorCount:count})
                                console.log(this.state.totalColorCount)
                            }
                    }

                    this.setState({ items: temp })
                }
            }});
    };

    render() {
        return (
            <div className="text-center hero my-5">
                <h1 className="mb-4">Here are your stats</h1>
                    <Progress animated className="progressBar" color="success" value={this.state.color1/this.state.totalColorCount*100}>Work {Math.round((this.state.color1/this.state.totalColorCount*100))}% </Progress>
                    <Progress animated className="progressBar" color="warning" value={this.state.color2/this.state.totalColorCount*100}>School {Math.round((this.state.color2/this.state.totalColorCount*100))}%</Progress>
                    <Progress animated className="progressBar" color="danger" value={this.state.color3/this.state.totalColorCount*100}>Fitness {Math.round((this.state.color3/this.state.totalColorCount*100))}%</Progress>
                    <Progress animated className="progressBar" value={this.state.color4/this.state.totalColorCount*100}>Social {Math.round((this.state.color4/this.state.totalColorCount*100))}%</Progress>
                    <Progress animated className="progressBar" color="info" value={this.state.color5/this.state.totalColorCount*100}>Hobby {Math.round((this.state.color5/this.state.totalColorCount*100))}%</Progress>
            </div>)
    }

}
