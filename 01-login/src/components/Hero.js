import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import logo from "../assets/logo.svg";
import { userInfo } from "os";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";

const Hero = () => {
const { loading, user } = useAuth0();

if (loading || !user) {
  return <Loading />;
}

return (
  <div className="text-center hero my-5">
    <h1 className="mb-4">Welcome {user.name}</h1>

    <p className="lead">
    <ButtonGroup vertical>
  <Button color="primary" className="mb-1">Create Schedule</Button>
  <Button color="primary" className="mb-1">View Schedule</Button>
  <Button className="mb-1">Blog *Coming Soon*</Button>
  <Button color="primary">Contact</Button>
</ButtonGroup>
      
    </p>
  </div>
);
}
export default Hero;
