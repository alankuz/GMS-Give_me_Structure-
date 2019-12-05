import React from "react";
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";


const PutDataToDB = message => {
    const { user } = useAuth0();

    let idToBeAdded = user.name;
    console.log(message)  
    console.log(idToBeAdded)  

    axios.post("http://localhost:3001/api/putData", { 
      id: idToBeAdded,
      message: message
    });
    return ([user, message])
  };

  export default PutDataToDB