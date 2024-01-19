import React, { useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Loader, Videos,  } from "./";
import { useGlobalContext } from "../context/AppContext";

const SearchFeed = () => {

  const {
    isLoading,
    setIsLoading,
    videos,
    setVideos
  } =useGlobalContext();
  const { searchTerm }=useParams();

  useEffect(()=>{
    setIsLoading(true);
    setVideos([]);
    fetchFromAPI(`search?q=${ searchTerm }&part=snippet`)
    .then((data)=>{
      setVideos(data.items)
      setIsLoading(false);
    })
    
  },[searchTerm]);



  return (
    <Box p={2} 
    sx={{ overflowY:"auto",
          height:"90vh",
          flex:2,
          } }>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white",mb:{ md : 4,},display:{md :"flex" ,xs:"block"},justifyContent:"center",alignItems:"center",gap:1 }}>
      Search Results For <span style={{color: "#005DD6" }}>{searchTerm }</span>
      </Typography>

      {
        isLoading ? <Loader /> :
          (
            <Videos videos={videos}/>
          )
      }
    </Box>
  );
};

export default SearchFeed;
