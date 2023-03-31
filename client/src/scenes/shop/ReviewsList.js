import React, { useEffect, useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../../state";
import "../../styles/global.css";
import profile from '../../components/img/img3.webp';
import Reviews from "./Reviews";
const ReviewsList = () => {
    const dispatch = useDispatch();
  //   const breakPoint = useMediaQuery("(min-width:600px)");
//   const [reviews, setReviews] = useState(null);
const reviews = useSelector((state) => state.cart.reviews);


  async function getReviews() {
    const reviews = await fetch(
      "http://localhost:1337/api/reviews",
      {
        headers: {
          Authorization: `Bearer a741f6c535a10e67baa5359dfa69d942c4ea786d56c617f53d171ead61e07072ab1c04101d82d4caae6d86c0e42ca41e3070c85969ea3bfcf9179758e51c428fd919496ff384506aaa26939299ef83f8b2d71c566f715cf4ad1c1936caa864490882a24c6c3e52b49fa9602d3053ea6bbc3e14193145cd77b207d0fd543a2973`,
        },
      }
    );
    console.log(reviews);

    const reviewssJson = await reviews.json();
    setReviews(reviewssJson.data);
    dispatch(setReviews(reviewssJson.data))
    console.log(reviewssJson.data);

  }

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h2" textAlign="left">
        Top Reviews
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 450px)"
        // justifyContent="space-between"
        // rowGap="20px"
        // columnGap="0.33%"
        gap="1.5rem"
      >
        {
            reviews.slice(0,4).map((review)=>{
                return(
                    <Reviews  review={review} key={`${review.username}-${review.id}`}/>
                )
            })
        }
        {/* {
            reviews.map((review)=>{
                return(
                <Box display="flex" justifyContent="space-between" flexDirection="row"
                border="2px solid black"
                borderRadius="5px"
                background-color="#eee"
                box-shadow="0 8px 8px -4px lightblue"
                >
                     <img
                    alt="profile"
                    width="200px"
                    height="200px"
                    src={profile}
                    />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flex="wrap"
                    
                    style={{ cursor: "pointer" }}
                    flexDirection="column"
                  >
                    <Box display="flex" justifyContent="space-between" flexDirection="row">
                    <Typography>{review.attributes.username}</Typography>
                    <Typography>{review.attributes.date}</Typography>
                    </Box>
                    
                    <Box display="flex" justifyContent="space-between" flexDirection="column">
                      <Typography>{review.attributes.message}</Typography>
                      <Typography>Rating: {review.attributes.rating}Stars</Typography>
                    </Box>
                  </Box>
                </Box>
                )
            })
        } */}
      </Box>
    </Box>
  );
};

export default ReviewsList;
