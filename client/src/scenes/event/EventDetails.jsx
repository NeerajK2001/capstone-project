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
                Authorization: `Bearer 7bf43d6454985574e8a847f0573d63683ec60829af862ba191b123788bb95324ebaa9b3c47e6bfbfe935330977564d417e6c6486a955093ecf05a0a48bbcb76a918544611b5787a20d1069e623102e2098e2a341e3e6e96bc97ea2e891d0fc4b1aa7a2e06c44ff6a28574cb6b7eb0e446de00331ea26d60ac7f33d9aaf8e06a2`
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