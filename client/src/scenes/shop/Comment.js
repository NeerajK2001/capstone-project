import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { userData } from "../authentication/helper";
import { Button, Input } from "reactstrap";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "../../styles/Comment.css";
import { BASE_URL } from "../../utils/base";
import { KEY } from "../../utils/key";

const initialForm = { message: "", rating: "" };
const Comment = () => {
  const [comment, setComment] = useState(initialForm);

//   const navigate = useNavigate();
  const writeComment = async () => {
    try {
      const url = `${BASE_URL}/api/reviews`;
      const { username } = userData();
      console.log(`This is ${username}`);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const dateNow = new Date(Date.now()).toLocaleString("en-GB", options);

      const headers = {
        Authorization:`${KEY}`
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

