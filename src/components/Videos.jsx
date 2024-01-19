import { Box, Stack } from "@mui/material"
import { VideoCard , ChannelCard } from "./";

const Videos = ({videos,direction}) => {

  if(videos==="null") return "...loading"
  return (
    <Stack sx={{
      flexDirection:direction || "row",
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'start',
      gap:2
    }}>
        {
          videos.map((item,index)=>(
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
          ))
        }
    </Stack>
  )
}
export default Videos
