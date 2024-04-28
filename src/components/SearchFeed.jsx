import React from "react";
import { useState, useEffect } from "react";
import Videos from "./Videos";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect( ()=>{
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
  
      <Box
      p={2} sx={{overflow:"auto",height:"90vh",flex:2}}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{ color: "white" }}
        >
         Search Results for : 
          <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>

  );
};

export default SearchFeed;
