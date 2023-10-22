import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

export default function HomePage(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src="/images/fashion1.jpeg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 550}}/>
                </div>
                <div>
                    <img src="/images/fashion2.jpeg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 550}}/>
                </div>
                <div>
                    <img src="/images/fashion3.jpeg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 550}}/>
                </div>
            </Slider>

            <Box display='flex' justifyContent='center' sx={{p: 4}}>
                <Typography variant="h1">
                    Welcome to our shop!
                </Typography>
            </Box>
        </>
    )
}


