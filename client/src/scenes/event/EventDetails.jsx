import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./event";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";

const ItemDetails = () =>{
    const dispatch = useDispatch();
    const {itemId} = useParams();
    const [value, setValue] = useState("description");
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }

    async function getItem() {
        const item = await fetch(
            `https://starfish-app-ettw4.ondigitalocean.app/api/items/${itemId}?populate=image`,
            {headers: {
                Authorization: `Bearer 751e40c47dc9a08cb4d6ccbb5fe41089bf8d53b55ff0bfc51afb1428fda74f8b70fda081a25fe31662651ed24b554d240ec15e52174c51b76e8daf02fb17e926898fee5c00d5383a513a5ad5e69cf31aebec8cca363e4e92dee8e47d67c81df8282a5c998a63d08a337ec0b6a61f0f9058d61fe587a393dc21d1228762821e7f`
              }}
        );

        console.log(item);

        const itemJson = await item.json();
        setItem(itemJson.data);
    }

    async function getItems() {
        const items = await fetch(
          "https://starfish-app-ettw4.ondigitalocean.app/api/items?populate=image",
          {headers: {
            Authorization: `Bearer 751e40c47dc9a08cb4d6ccbb5fe41089bf8d53b55ff0bfc51afb1428fda74f8b70fda081a25fe31662651ed24b554d240ec15e52174c51b76e8daf02fb17e926898fee5c00d5383a513a5ad5e69cf31aebec8cca363e4e92dee8e47d67c81df8282a5c998a63d08a337ec0b6a61f0f9058d61fe587a393dc21d1228762821e7f`
          }}
        );

        console.log(items);

        const itemsJson = await items.json();
        setItems(itemsJson.data);
      }

    useEffect(() => {
        getItem();
        getItems();
    })

    return <Box
    width="80%"
    m= "80px auto"
    >
        <Box display="flex" flexWrap="wrap" columnGap="40px">
            {/* Images */}
            <Box flex="1 1 40%" mb="40px">
                <img
                    alt={item?.name}
                    width="100%"
                    height="100%"
                    src={`https://starfish-app-ettw4.ondigitalocean.app${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    style={{objectFit: "contain"}}
                />
            </Box>
            {/* actions */}
            <Box flex="1 1 50%" mb="40px">
                <Box display="flex" justifyContent="space-between">
                    <Box>Home/Item</Box>
                    <Box>Pren Next</Box>
                </Box>
                <Box m="65px 0 25px 0">
                    <Typography variant="h3">{item?.attributes?.name}</Typography>
                    <Typography>${item?.attributes?.price}</Typography>
                    <Typography sx={{ mt: "20px" }}>{item?.attributes?.longDescription}</Typography>
                </Box>
                <Box display="flex" alignItems="center" minHeight="50px">
                    <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[300]}`}
                        mr="20px"
                        p="2px 5px"
                        >
                        <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                        <IconButton onClick={() => setCount(count + 1)}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <Button
                    sx={{
                        backgroundColor: "#222222",
                        color: "white",
                        borderRadius: 0,
                        minWidth: "150px",
                        padding: "10px 40px",
                    }}

                    onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
                    >
                        ADD TO CART
                    </Button>
                </Box>
                <Box>
                    <Box m="20px 0 5px 0" display="flex">
                        <FavoriteBorderOutlinedIcon/>
                        <Typography sx={{ml: "5px"}}>ADD TO WISHLIST</Typography>
                    </Box>
                    <Typography>CATEGORIES: {item?.attributes?.category}</Typography>
                </Box>
            </Box>
        </Box>
        {/* Information */}
        <Box m="20px 0">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="DESCRIPTION" value="description" />
                <Tab label="REVIEWS" value="reviews" />
            </Tabs>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="15px">
            {value === "description" && (
                <div>{item?.attributes?.longDescription}</div>
            )}
            {value === "reviews" && (
                <div>reviews</div>
            )}
        </Box>

        {/* Related Items */}
        <Box mt="50px" width="100%">
            <Typography variant="h3" fontWeight="bold">
                Reated Products
            </Typography>
            <Box mt="20px"
                display="flex"
                flexWrap="wrap"
                columnGap="1.33%"
                justifyContent="space-between"
            >
                {items.slice(0, 4).map((item, i) => (
                    <Item key={`${item.name}-${i}`} item={item} />
                ))}
            </Box>
        </Box>
    </Box>

    
}

export default ItemDetails;