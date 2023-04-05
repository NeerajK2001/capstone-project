import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cors from "cors";
import { userData } from "../authentication/helper";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import { DateTime } from "luxon";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "../../styles/Comment.css";

const initialForm = { message: "", rating: "" };
const Comment = () => {
  const [comment, setComment] = useState(initialForm);

  const navigate = useNavigate();
  const writeComment = async () => {
    try {
      const url = `https://starfish-app-ettw4.ondigitalocean.app/api/reviews`;
      const { username } = userData();
      console.log(`This is ${username}`);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const dateNow = new Date(Date.now()).toLocaleString("en-GB", options);

      const headers = {
        Authorization:
          "Bearer b204f249f07d78414ad22f7dd5905342b2d6d9b817ab206cee92fff4b132ccc56aa986ce86e5b30d112dfbe665ce8db311985df76dc063490a07298ddfc293935791125ae8083854b14680d227bea733ba254eaca54389db92e82806fd2f9f1a8e0c549dc052008623e9892bd8fde082ac4995b512123ad8bc91ca84af6c8e6f",
      };
      if (comment.message && comment.rating) {
        const res = await axios.post(
          url,
          {
            data: {
              message: comment.message,
              rating: comment.rating,
              username: username,
              date: dateNow,
            },
          },
          { headers }
        );
        if (!!res) {
          toast.success("Commented successfully!", {
            hideProgressBar: true,
          });
          setComment(initialForm);
          //   navigate("/login");
          console.log(`Hello the ${dateNow}`);
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
    window.location.reload(false);
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setComment((currentComment) => ({
      ...currentComment,
      [name]: value,
    }));
  };

  return (
    // <Row>
    //   <Col sm="12" md={{ size: 4, offset: 4 }}>
    //     <div>
    //       <h2>Customer Review</h2>
    //       <FormGroup>
    //         <Input
    //           type="text"
    //           name="message"
    //           value={comment.message}
    //           onChange={handleUserChange}
    //           placeholder="Write A Review"
    //         />
    //       </FormGroup>
    //       <FormGroup>
    //         <Input
    //           type="text"
    //           name="rating"
    //           value={comment.rating}
    //           onChange={handleUserChange}
    //           placeholder="rating"
    //         />
    //       </FormGroup>
    //       <Button color="primary" onClick={writeComment}>
    //         Submit
    //       </Button>
    //     </div>
    //   </Col>
    // </Row>
    <Box width="90%" m="0 auto" mt="40px">
      <Typography variant="h2" mb="20px">
        Customer Reviews
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        flexWrap="wrap"
        width="100%"
        className="comment-box"
      >
        <Box display="flex" flexDirection="column" gap="1rem" className="comment-input" width="80%">
          <Input
            type="text"
            name="message"
            value={comment.message}
            onChange={handleUserChange}
            placeholder="Write A Review"
          />
          <Input
            type="text"
            name="rating"
            value={comment.rating}
            onChange={handleUserChange}
            placeholder="rating"
          />
        </Box>
        <Box>
          <Button color="primary" onClick={writeComment} width="20%">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Comment;

