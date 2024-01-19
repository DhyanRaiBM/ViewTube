import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ReactPlayer from 'react-player';
import { Videos ,Loader} from "./";
import {CheckCircle,ThumbUp ,RemoveRedEye }from "@mui/icons-material";
import { useGlobalContext } from "../context/AppContext";


const VideoDetail = () => {
  
  const [videoDetail, setVideoDetail] = useState([]);
  const {
    isLoading,
    setIsLoading,
    videos,
    setVideos
  } =useGlobalContext();
  
  const { id } = useParams();

  useEffect(()=>{
    setIsLoading(true);
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then(data =>{
      setVideoDetail(data?.items[0]);
      fetchFromAPI(`search?q=${data?.items[0]?.snippet?.tags[0]}&part=snippet`)
      .then(data =>{
        setVideos(data?.items);
        setIsLoading(false);
      });
    });
  },[id]);



  return (
      <>
          {
        isLoading ? <Loader /> :
        (
          <Stack 
        sx={{
          minHeight :"100vh",
          px:2,
          gap:4
         }} 
        direction={{md :"row" ,xs:"column"}}
      >
          <Box sx={{
            flex:1,
            mb:{ xs :2,md:0},
          }}>
              <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${videoDetail?.id}`}
                className="react-player"
                playing={true}
                controls={true}
              />
              <Typography 
                variant="h5"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  pt:2,
                }} 
              >
                  {videoDetail?.snippet?.title}
              </Typography>
              <Box sx={{ display:"flex",alignItems:"center",justifyContent:"space-between",}} >
                  <Typography color="#005DD6" variant="h5" fontWeight="bold">
                     {videoDetail?.snippet?.channelTitle}
                     <CheckCircle sx={{ fontSize: "14px", color: "#005DD6", ml: "5px" }} />
                  </Typography>

                  <Box color="#fff" sx={{ display:"flex",gap:2}}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{display:"flex",alignItems:"center",gap:1}}>
                        {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} <ThumbUp />
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{display:"flex",alignItems:"center",gap:1}}>
                        {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} <RemoveRedEye />
                    </Typography>
                  </Box>
              </Box>
          </Box>

          <Box sx={{
              overflowY:"auto",
              maxHeight:"95vh"
          }}>
              <Videos videos={videos} direction={{md :"column",xs:"row" }} />
          </Box>
      </Stack>
        )
      }
      </>
  )
}
export default VideoDetail