import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";


export default {
saveSchedule:function(data) {
    console.log(data)
return axios.post('/api/putData', data) 
},
loadSchedule:function(data) {
    console.log(data)
return axios.get('/api/getData') 
}


}