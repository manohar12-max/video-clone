import React from "react";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constant";
import { Link } from "react-router-dom";
const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "326px",
        width: {xs:"356px",md:"320px"},
        margin: "auto",
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id.channelId}`}>
        <CardContent
          sx={{
            display: "flex",                                               
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
            <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
            alt ={channelDetail?.snippet?.title}
            sx={{
                borderRadius:"50%" ,height:"180px",
                width:"180px",mb:2
            }}
            />
            <Typography variant="h6" gutterBottom>
              {channelDetail?.snippet?.title}
            </Typography>
            {channelDetail?.statistics?.subscriberCount &&(
                <Typography variant="body2" gutterBottom>
                  {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>
            )}

           
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
