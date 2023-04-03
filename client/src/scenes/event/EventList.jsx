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
      "https://starfish-app-ettw4.ondigitalocean.app/api/events?populate=image",
    //   { method: "GET" },
      {headers: {
        Authorization: `Bearer d2ad2d8de4034dd459d315dc8a01356121c3b4d2ca5286f255b3fddca855362e23461a9c4caa2dd6d9e23f6b4cc663c08585890f206cd2e1fbe90aaf2bb9c229b6c751a490e69e8d19c5c02c1c9a250cbaf22655e1e65723b23b65a77afa833a553ddd96f1cc8b09ad001fc0511e548b4b125c38a6fa1a88be38968091f0244f`
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
