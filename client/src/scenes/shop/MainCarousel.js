import { Box, IconButton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from 'react';

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg|webp)$/)
);

const MainCarousel = () =>{
    return (
        <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev,label)=>(
            <IconButton
            onClick={onClickHandler}
            sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
            }}
            >
                <NavigateBeforeIcon sx={{fontSize: 40}} />

            </IconButton>
        
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
            <IconButton
              onClick={onClickHandler}
              sx={{
                position: "absolute",
                top: "50%",
                right: "0",
                color: "white",
                padding: "5px",
                zIndex: "10",
              }}
            >
              <NavigateNextIcon sx={{ fontSize: 40 }} />
            </IconButton>
        )}
        >
            {Object.values(heroTextureImports).map((texture, index) =>(
                <Box key={`carousel-image-${index}`}>
                    <img 
                    src={texture}
                    alt={`carouse;=${index}`}
                    style={{
                        width: "100%",
                        height: "700px",
                        objectFit: "cover",
                        backgroundAttachment: "fixed",
                      }}
                    />
                </Box>
            ))}

        </Carousel>
    )
}

export default MainCarousel