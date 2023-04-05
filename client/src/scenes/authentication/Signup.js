
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import "../../styles/Signup.css";
import { Link } from "react-router-dom";

const initialUser = { email: "", password: "", username: "" };
const Signup = () => {
    const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `https://starfish-app-ettw4.ondigitalocean.app/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="sign-up">
        <div className="part-1">
          <div className="part1-overlay">
            <h2>WELCOME!</h2>
            <p>
              Sign up to <br />
              continue
            </p>
          </div>
        </div>
        <div className="part-2">
          <h3>Sign up</h3>
          <div className="form">
            <Row className="register">
              <Col sm="12" md={{ size: 4, offset: 4 }}>
                <div>
                  <FormGroup>
                    <Input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleUserChange}
                      placeholder="Enter your full name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleUserChange}
                      placeholder="Enter your email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleUserChange}
                      placeholder="Enter password"
                    />
                  </FormGroup>
                  <Button color="primary" onClick={signUp}>
                    Sign up
                  </Button>
                </div>
              </Col>
            </Row>
            <p>or</p>
            <button>Sign up with google</button>
            <button>Sign up with facebook</button>
            <p>
              Already have an account? <Link to="/login">Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
