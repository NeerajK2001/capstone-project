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
            `https://starfish-app-ettw4.ondigitalocean.app/api/events/${eventId}?populate=image`,
            {headers: {
                Authorization: `Bearer b204f249f07d78414ad22f7dd5905342b2d6d9b817ab206cee92fff4b132ccc56aa986ce86e5b30d112dfbe665ce8db311985df76dc063490a07298ddfc293935791125ae8083854b14680d227bea733ba254eaca54389db92e82806fd2f9f1a8e0c549dc052008623e9892bd8fde082ac4995b512123ad8bc91ca84af6c8e6f`
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
                    src={`https://starfish-app-ettw4.ondigitalocean.app${event?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
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