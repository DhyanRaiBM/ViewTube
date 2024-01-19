import React, { useEffect} from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, SideBar, Loader } from "./";
import { useGlobalContext } from "../context/AppContext";

const Feed = () => {
  const {
    isLoading,
    setIsLoading,
    selectedCategory,
    videos,
    setVideos
  } =useGlobalContext();

  useEffect(()=>{
    setIsLoading(true);
    setVideos([]);
    fetchFromAPI(`search?q=${selectedCategory}&part=snippet`)
    .then((data)=>{
      setVideos(data.items);
      setIsLoading(false);
    })
  },[selectedCategory]);



  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar  />
      
      </Box>

    {
      isLoading ? <Loader /> : 
      (
        <Box p={2} 
        sx={{ overflowY:"auto",
              height:"90vh",
              flex:2,
              } }>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory}<span style={{ color: "#005DD6" }}> videos</span>
          </Typography>

          <Videos videos={videos}/>
        </Box>
      )
    }
    </Stack>
  );
};

export default Feed;
