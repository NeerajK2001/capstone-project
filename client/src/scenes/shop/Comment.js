import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cors from 'cors';
import { Col, Row, Button, FormGroup, Input } from "reactstrap";

const initialForm = { message: "", rating: ""};
const Comment = () => {
  
    const [comment, setComment] = useState(initialForm);
    const navigate = useNavigate();
    // const state = {date: new Date()}
    // ddd {this.state.date.toLocaleDateString()}

  const writeComment = async () => {
    try {
      const url = `http://localhost:1337/api/reviews`;
      const headers = { 
        'Authorization': 'Bearer a741f6c535a10e67baa5359dfa69d942c4ea786d56c617f53d171ead61e07072ab1c04101d82d4caae6d86c0e42ca41e3070c85969ea3bfcf9179758e51c428fd919496ff384506aaa26939299ef83f8b2d71c566f715cf4ad1c1936caa864490882a24c6c3e52b49fa9602d3053ea6bbc3e14193145cd77b207d0fd543a2973',
    };
      if (comment.message && comment.rating) {
        const res = await axios.post(url, comment, {headers} );
        if (!!res) {
          toast.success("Commented successfully!", {
            hideProgressBar: true,
          });
          setComment(initialForm);
        //   navigate("/login");
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
    setComment((currentComment) => ({
      ...currentComment,
      [name]: value,
    }));
  };

  return (
    <Row className="register">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <div>
          <h2>Customer Review</h2>
          <FormGroup>
            <Input
              type="text"
              name="message"
              value={comment.message}
              onChange={handleUserChange}
              placeholder="Write A Review"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="rating"
              value={comment.rating}
              onChange={handleUserChange}
              placeholder="rating"
            />
          </FormGroup>
          <Button color="primary" onClick={writeComment}>
            Submit
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Comment;



