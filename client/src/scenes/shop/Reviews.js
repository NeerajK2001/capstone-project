// import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material";
// import { IconButton,  Button } from "@mui/material";
import profile from "../../components/img/img3.webp";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { shades } from "../theme";
// import { shades } from "../../theme";
// import { useNavigate } from "react-router-dom";
// import { addToCart } from "../../state";
import "../../styles/global.css";
import "../../styles/Reviews.css";
const Reviews = ({ review, width }) => {
//   const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [count, setCount] = useState(1);
  // const [isHovered, setIsHovered] = useState(false);
//   const {
//     // palette: { neutral },
//   } = useTheme();

  const { username, date, message, rating } = review.attributes;

  return (
    <Box
      display="flex"
      flexDirection="row"
    //   border="2px solid black"
      borderRadius="5px"
      className="review-box"
      gap="1rem"
      width="100%"
      background="#eee"
    
    >
      <img alt="profile" width="100px" height="100px" src={profile} />
      <Box
        display="flex"
        // justifyContent="space-between"
        flex="wrap"
        style={{ cursor: "pointer" }}
        flexDirection="column"
        width="70%"
      >
        <Box display="flex" justifyContent="space-between" flexDirection="row">
          <Typography variant="h3">{username}</Typography>
          <Typography>{date}</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Typography >{message}</Typography>
          <Typography variant="p">Rating: {rating}Stars</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;