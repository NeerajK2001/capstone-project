// import { useState } from "react";
// import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import profile from "../../components/img/img3.webp";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { shades } from "../theme";
// import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
// import { addToCart } from "../../state";
import "../../styles/global.css";
const Reviews = ({ review, width }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [count, setCount] = useState(1);
  // const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { username, date, message, rating } = review.attributes;

  return (
    <Box
      display="flex"
      flexDirection="row"
      border="2px solid black"
      borderRadius="5px"
      background-color="#eee"
      box-shadow="0 8px 8px -4px lightblue"
    >
      <img alt="profile" width="200px" height="200px" src={profile} />
      <Box
        display="flex"
        // justifyContent="space-between"
        flex="wrap"
        style={{ cursor: "pointer" }}
        flexDirection="column"
      >
        <Box display="flex" justifyContent="space-between" flexDirection="row">
          <Typography>{username}</Typography>
          <Typography>{date}</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Typography>{message}</Typography>
          <Typography>Rating: {rating}Stars</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
