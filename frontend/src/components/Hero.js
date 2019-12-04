import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { useAuth0 } from "../react-auth0-spa";
import { NavLink as RouterNavLink, Link } from "react-router-dom";





const Hero = () => {
  const { user } = useAuth0();
  if (!user) {
    return (
      <div className="text-center hero my-5">
        <h1 className="mb-4">Welcome</h1>
        <p>
          <h1>Please login</h1>
        </p>
      </div>)
  } else {
    return (
      <div className="text-center hero my-5">
        <h1 className="mb-4">Welcome {user.name}</h1>

        <p className="lead">
          <ButtonGroup vertical>
            <Link to="/addschedule"><Button color="primary" className="mb-1" >Create Schedule</Button></Link>
            <RouterNavLink to="/schedule"><Button color="primary" className="mb-1">View Schedule</Button></RouterNavLink>
              <Button className="mb-1">Blog *Coming Soon*</Button>
              <Button color="primary">Contact</Button>
    </ButtonGroup>
        </p>
      </div>)
    }
  
  };
  export default Hero;
