import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Event from "./event";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../state";
import "../../styles/global.css"
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
      "http://localhost:1337/api/events?populate=image",
    //   { method: "GET" },
      {headers: {
        Authorization: `Bearer c37c8f6ec109a97dd46dde3cec5a40678d799cbdcdf5449c3ac34bb053f360263571fb7a33a14a20afae4a8bf442497ca0d5727344d7bbaee9e00c762b69e3c01946c4eeb3c459e2b6bd273c44ce07ce410a59dc75f8771e6343ccc75adace6ec2e809d69e4badf55fce4670ed6411020456fb82e5294660daa81da771a806c5`
      }}
    );
    console.log(events);
    const itemsJson = await events.json();
    dispatch(setEvents(itemsJson.data));
    console.log(itemsJson)
  }

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
