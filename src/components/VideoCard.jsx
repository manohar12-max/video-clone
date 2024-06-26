import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoThumbnailUrl,
} from "../utils/constant";
import { Link } from "react-router-dom";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{width:{md:"300px",xs:"100%"},
boxShadow:"none",borderRadius:0}}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: "358px", height: "180px" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "160px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            sx={{ color: "#fff" }}
          >
            {snippet?.title.slice(0.60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            sx={{ color: "gray" }}
          >
            {snippet?.channelTitle|| demoChannelTitle}
           <CheckCircle sx={{fontSize:12,color:"gray",ml:"5px"}}/> 
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
