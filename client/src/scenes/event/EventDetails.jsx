import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Event from "./event";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import "../../styles/global.css"

const EventDetails = () =>{
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const [value, setValue] = useState("description");
    const [count, setCount] = useState(1);
    const [event, setEvent] = useState(null);
    const [items, setEvents] = useState([]);

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }

    async function getItem() {
        const event = await fetch(
            `http://localhost:1337/api/events/${eventId}?populate=image`,
            {headers: {
                Authorization: `Bearer c37c8f6ec109a97dd46dde3cec5a40678d799cbdcdf5449c3ac34bb053f360263571fb7a33a14a20afae4a8bf442497ca0d5727344d7bbaee9e00c762b69e3c01946c4eeb3c459e2b6bd273c44ce07ce410a59dc75f8771e6343ccc75adace6ec2e809d69e4badf55fce4670ed6411020456fb82e5294660daa81da771a806c5`
              }}
        );

        console.log();

        const itemJson = await event.json();
        setEvent(itemJson.data);
    }

    useEffect(() => {
        getItem();
    })

    return <Box
    width="80%"
    m= "80px auto" 
    >
            <Typography variant="h1" mb="20px">{event?.attributes?.name}</Typography>

        <Box display="flex" flexWrap="wrap" columnGap="40px">
            {/* Images */}
            <Box flex="1 1 40%" mb="40px">
                <img
                    alt={event?.name}
                    width="100%"
                    height="100%"
                    src={`http://localhost:1337${event?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    style={{objectFit: "contain"}}
                />
            </Box>
            {/* actions */}
            <Box flex="1 1 50%" mb="40px">
                <Box m="65px 0 25px 0">
                    <Typography variant="h2">{event?.attributes?.name}</Typography>
                    <Typography sx={{ mt: "20px" }}>{event?.attributes?.longDescription}</Typography>
                </Box>
                <Box>
                    {/* <Box m="20px 0 5px 0" display="flex">
                        <FavoriteBorderOutlinedIcon/>
                        <Typography sx={{ml: "5px"}}>ADD TO WISHLIST</Typography>
                    </Box> */}
                    <Typography>CATEGORIES: {event?.attributes?.category}</Typography>
                    <Typography>Time: {event?.attributes?.time}</Typography>
                    <Typography>Date: {event?.attributes?.date}</Typography>
                </Box>
            </Box>
        </Box>
        {/* Information */}
        <Box m="20px 0">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="DESCRIPTION" value="description" />
                {/* <Tab label="REVIEWS" value="reviews" /> */}
            </Tabs>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="15px">
            {value === "description" && (
                <div>{event?.attributes?.shortDescription}</div>
            )}
            
        </Box>

        
    </Box>

    
}

export default EventDetails;