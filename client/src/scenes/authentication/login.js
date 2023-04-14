import React from "react";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "./helper";
import { useState } from "react";
import { BASE_URL } from "../../utils/base";


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
    const url = `${BASE_URL}/api/auth/local`;
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
          window.location.reload(false);
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div>
      <div className="sign-up">
        <div className="part-1 login-box">
          <div className="part1-overlay">
            <h2>WELCOME!</h2>
            <p>
              Log in to<br />
              continue
            </p>
          </div>
        </div>
        <div className="part-2">
          <h3>Log In</h3>
          <div className="form">
            <Row className="login">
              <Col sm="12" md={{ size: 4, offset: 4 }}>
                <div>
                  <FormGroup>
                    <Input
                      type="email"
                      name="identifier"
                      value={user.identifier}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                    />
                  </FormGroup>
                  <Button color="primary" onClick={handleLogin}>
                    Login
                  </Button>
                  
                </div>
              </Col>
            </Row>
            <p>or</p>
            <button>Log in with google</button>
            <button>Log in with facebook</button>
            <h6>
                    Click <Link to="/signup">Here</Link> to Signup
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
