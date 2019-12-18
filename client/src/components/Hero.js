import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { useAuth0 } from "../react-auth0-spa";
import { NavLink as RouterNavLink, Link } from "react-router-dom";

const Hero = () => {
  const { user } = useAuth0();
  if (!user) {
  } else {
    localStorage.setItem("account", user.name);
  }

  if (!user) {
    return (
      <div className="text-center hero my-5">
        <h1 className="mb-4">Welcome</h1>
        <p>
          <h1>Please login</h1>
        </p>
      </div>
    );
  } else {
    return (
      <div className="text-center hero my-5">
        <h1 className="mb-4">Welcome {user.name}</h1>

        <p className="lead">
          <ButtonGroup vertical>
            <RouterNavLink className="pageButtons" to="/schedule">
              <Button className="pageButtons" color="primary" className="mb-1">
                View Schedule
              </Button>
            </RouterNavLink>
            <RouterNavLink className="pageButtons" to="/analytics">
              <Button className="pageButtons" color="primary" className="mb-1">
                Analytics
              </Button>
            </RouterNavLink>
            <Button className="mb-1">Blog *Coming Soon*</Button>
            <RouterNavLink className="pageButtons" to="/contact">
              <Button color="primary">Contact</Button>
            </RouterNavLink>
          </ButtonGroup>
        </p>
      </div>
    );
  }
};
export default Hero;
