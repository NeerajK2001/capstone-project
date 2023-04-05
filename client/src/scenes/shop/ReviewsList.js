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
      "https://starfish-app-ettw4.ondigitalocean.app/api/reviews?_sort=createdAt:desc",
      {
        headers: {
          Authorization: `Bearer b204f249f07d78414ad22f7dd5905342b2d6d9b817ab206cee92fff4b132ccc56aa986ce86e5b30d112dfbe665ce8db311985df76dc063490a07298ddfc293935791125ae8083854b14680d227bea733ba254eaca54389db92e82806fd2f9f1a8e0c549dc052008623e9892bd8fde082ac4995b512123ad8bc91ca84af6c8e6f`,
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
    <Box width="90%" margin="40px auto">
      <Typography variant="h2" textAlign="left" mb="20px">
        Top Reviews
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 400px)"
        // justifyContent="space-between"
        // rowGap="20px"
        // columnGap="0.33%"
        gap="1.5rem"
      >
        {
            reviews.map((review)=>{
                return(
                    <Reviews  review={review} key={`${review.username}-${review.id}`}/>
                )
            })
        }
      </Box>
    </Box>
  );
};

export default ReviewsList;
