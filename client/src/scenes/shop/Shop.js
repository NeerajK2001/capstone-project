import { Box, Button, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../state";
import "../../styles/global.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MainCarousel from "./MainCarousel";
import ReviewsList from "./ReviewsList";
import Comment from "./Comment";

// console.log("hello this is about");


// export async function getServerSideProps(ctx) {
//   const loginData = {
//       identifier: 'neerajkumar94652@gmail.com',
//       password: 'Quantum@786',
//   };

//   const login = await fetch(`https://starfish-app-ettw4.ondigitalocean.app/api/auth/local`, {
//       method: 'POST',
//       headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(loginData),
//   });

//   const loginResponseData = await login.json();
//   // get posts from strapi REST API
//   const res = await fetch(`https://starfish-app-ettw4.ondigitalocean.app/api/items`);
//   let posts = await res.json();
//   posts = posts.data
//   return {
//       props: {
//           posts: posts,
//           loginResponseData: loginResponseData,
//       },
//   };
// }

const Shop = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("description");
  const [count] = useState(1);
  const [item, setItem] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // jwt = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4NzEwMzYyLCJleHAiOjE2ODEzMDIzNjJ9.87-i9MhSsV6btPPMbwBQLlqHq3wou08fzh92L9utE7I
  
  async function getItem() {
    // let headers = {Authorization: `Bearer ${process.env.ADMIN_TOKEN}`}
    const item = await fetch(
      `http://localhost:1337/api/items/5?populate=image`,
      // {method: "GET"}
      {headers: {
          Authorization: `Bearer a741f6c535a10e67baa5359dfa69d942c4ea786d56c617f53d171ead61e07072ab1c04101d82d4caae6d86c0e42ca41e3070c85969ea3bfcf9179758e51c428fd919496ff384506aaa26939299ef83f8b2d71c566f715cf4ad1c1936caa864490882a24c6c3e52b49fa9602d3053ea6bbc3e14193145cd77b207d0fd543a2973`
        }}
  );   

    // console.log(item);

    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  useEffect(() => {
    getItem();
    // getItems();
  }, []);

  function MouseOverRed(event) {
    event.target.style.background = '#BC4123';
  }
  function MouseOverGreen(event) {
    event.target.style.background = 'green';
  }
  function MouseOut(event){
    event.target.style.background="";
  }

  return (
    <Box>
      <Box width="80%" m="80px auto">
      `<Typography variant="h1" mb="20px">Shop 9on9 game</Typography>
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          {/* Images */}
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={item?.name}
              width="100%"
              height="100%"
              src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
              style={{ objectFit: "fill" }}
            />
          </Box>
          {/* actions */}
          <Box flex="1 1 50%" mb="40px">
            <Box m="0px 0 25px 0">
              <Typography variant="h2">{item?.attributes?.name}</Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                columnGap="1.33%"
                justifyContent="space-between"
                m="5px 0px"
              >
                <Typography variant="p">Sold By Jalfam Games</Typography>
                <Typography variant="p">Eco-friendly</Typography>
              </Box>
              <Typography variant="p">See All Reviews</Typography>

              <Typography variant="h3" m="5px 0px">
                ${item?.attributes?.price}
              </Typography>
              <Typography sx={{ mt: "20px" }}>
                {item?.attributes?.longDescription}
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              minHeight="50px"
            >
              <Button
                sx={{
                    backgroundColor: "#041E42",
                    color: "white",
                    borderRadius:"5px",
                    minWidth: "150px",
                    padding: "15px 100px",
                }}
                onMouseOver={MouseOverGreen}
                onMouseOut={MouseOut}
                onClick={() =>
                  dispatch(addToCart({ item: { ...item, count } }))

                }
              >
                ADD TO CART
              </Button>

              <Button
                sx={{
                  backgroundColor: "#D1683B",
                  color: "white",
                  borderRadius:"5px",
                  minWidth: "150px",
                  padding: "15px 100px",

                }}
                onMouseOver={MouseOverRed}
                onMouseOut={MouseOut}
                onClick={() => dispatch(setIsCartOpen({}))}
              >
                VIEW CART
              </Button>
            </Box>
            <Box>
              <Box m="20px 0 5px 0" display="flex">
                <LocalShippingOutlinedIcon />
                <Typography sx={{ ml: "5px" }}>
                  Free delievery in Edmonton
                </Typography>
              </Box>
              <Typography>In Stock</Typography>
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
            <div>{item?.attributes?.longDescription}</div>
          )}
          {value === "reviews" && <div>reviews</div>}
        </Box>
      </Box>
      <MainCarousel/>
      <Comment/>
      <ReviewsList/>
    </Box>
  );
};

export default Shop;
