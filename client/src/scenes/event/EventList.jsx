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
        Authorization: `Bearer 7bf43d6454985574e8a847f0573d63683ec60829af862ba191b123788bb95324ebaa9b3c47e6bfbfe935330977564d417e6c6486a955093ecf05a0a48bbcb76a918544611b5787a20d1069e623102e2098e2a341e3e6e96bc97ea2e891d0fc4b1aa7a2e06c44ff6a28574cb6b7eb0e446de00331ea26d60ac7f33d9aaf8e06a2`
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
