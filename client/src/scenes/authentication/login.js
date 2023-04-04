import React from "react";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "./helper";
import { useState } from "react";
import '../../styles/Login.css';

const initialUser = { password: "", identifier: "" };



const Login = () => {
  const [user, setUser] = useState(initialUser);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <Row className="login">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <div>
          <div className="login">
              <div className="part-1">  
                    <div className="part1-overlay">
                    <h2>WELCOME!</h2>
                    <p>Login to <br />continue</p>
                    </div>
              </div>
              
              <div className="part-2">
                <h3>Login</h3>
                  <FormGroup>
                    <Input
                      type="email"
                      name="identifier"
                      value={user.identifier}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </FormGroup>
                  <Button color="primary" onClick={handleLogin}>
                    Login
                  </Button>
                  <h6>
                    Don't Have An Account? <Link to="/registration">&nbsp; Signup</Link>
                  </h6> 
              </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;