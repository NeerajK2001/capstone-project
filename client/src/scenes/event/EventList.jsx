import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Event from "./Event";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../state";
import "../../styles/global.css"
import "../../styles/Event.css"
import { BASE_URL } from "../../utils/base";
import { KEY } from "../../utils/key";
// import axios from "axios";
const EventList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const events = useSelector((state) => state.cart.events);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getEvents() {
    const events = await fetch(
      `${BASE_URL}/api/events?populate=image`,
    //   { method: "GET" },
      {headers: {
        Authorization: `Bearer ${KEY}`
      }}
    );
    console.log(events);
    const itemsJson = await events.json();
    dispatch(setEvents(itemsJson.data));
    console.log(itemsJson)
  }

  // const baseURL = `${BASE_URL}/api/events?populate=image`;
  // const headers = {
  //   Authorization:`${KEY}`
  // };
  // async function getEvents() {
  //   axios.get('https://starfish-app-ettw4.ondigitalocean.app/api/events?populate=image',{headers}).then((response)=>{
  //     const itemsJson = response.json();
  //   dispatch(setEvents(itemsJson.data));
  //   console.log(itemsJson)
  //   })
  //   console.log(events);
  // }

  


  useEffect(() => {
    getEvents();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const latest = events.filter(
    (event) => event.attributes.category === "latest"
  );
  const previous = events.filter(
    (event) => event.attributes.category === "previous"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h2" textAlign="center">
        Events
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="LATEST" value="latest" />
        <Tab label="PREVIOUS" value="previous" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 450px)"
        // justifyContent="space-between"
        // rowGap="20px"
        // columnGap="0.33%"
        gap="1.5rem"
      >
        {value === "all" &&
          events.map((event) => (
            <Event event={event} key={`${event.name}-${event.id}`} />
          ))} 
        {value === "latest" &&
          latest.map((event) => (
            <Event event={event} key={`${event.name}-${event.id}`} />
          ))}
        {value === "previous" &&
          previous.map((event) => (
            <Event event={event} key={`${event.name}-${event.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default EventList;
