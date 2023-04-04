// import { useState } from "react";
// import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { shades } from "../theme";
// import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
// import { addToCart } from "../../state";
import "../../styles/global.css"
const Event = ({ event, width }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [count, setCount] = useState(1);
  // const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, time, date, shortDescription, name, image } =
    event.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box display="flex" justifyContent="space-between" >
          <Box display="flex" justifyContent="space-between" flex="wrap" border="2px solid black" borderRadius="5px" background-color="#eee" box-shadow="0 8px 8px -4px lightblue" onClick={() => navigate(`/event/${event.id}`)}
          style={{ cursor: "pointer" }}
          >
            <img
            alt={event.name}
            width="200px"
            height="200px"
            src={`https://starfish-app-ettw4.ondigitalocean.app${url}`}
            
            />
            <Box mt="3px" height="100px" padding="0.5rem">
              <Typography variant="subtitle2" color={neutral.dark}>
                {category
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </Typography>
              <Typography>{name}</Typography>
              <Typography variant="p">{shortDescription}</Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography>{date}</Typography>
                  <Typography>{time}</Typography>
                </Box>
              {/* <Typography fontWeight="bold">${price}</Typography> */}
            </Box>
          </Box>
        </Box>
      
  );
};

export default Event;
