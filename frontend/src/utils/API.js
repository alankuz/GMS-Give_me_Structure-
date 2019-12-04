import axios from "axios";

export default {
saveSchedule:function(data) {
    console.log(data)
return axios.post('http://localhost:3001/api/putData', data) 
},
loadSchedule:function(data) {
    console.log(data)
return axios.get('http://localhost:3001/api/getData') 
}

}