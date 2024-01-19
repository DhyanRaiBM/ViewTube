import { Box, Typography } from "@mui/material"
import { GitHub,Instagram,LinkedIn } from "@mui/icons-material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelCard, Loader, Videos } from "./";
import { useGlobalContext } from "../context/AppContext";



const ChannelDetail = () => {

  const { id }=useParams();
  const [channelDetail, setChannelDetail] = useState([]);
  const {
    isLoading,
    setIsLoading,
    videos,
    setVideos
  } =useGlobalContext();

  useEffect(()=>{
        setIsLoading(true);

        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then(data =>setChannelDetail(data.items[0]))
  
        fetchFromAPI(`search?part=snippet&channelId=${id}`)
        .then(data =>{
          setVideos(data.items);
          setIsLoading(false);
        })
      
  },[id])

  return (
    <>
        {isLoading ? <Loader /> :
        (
          <Box >
            <Box sx={{
              background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
              backgroundBlendMode:"multiply",
              height:{ sm :"300px",xs:"200px"},
            }} />
            <Box sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
            }}>
              <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
            </Box>
            <Box p={2}>
                <Videos videos={videos} />
            </Box>
          </Box>
        )}
    </>
  )
}
export default ChannelDetail

