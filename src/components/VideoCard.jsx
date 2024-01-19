import { Link } from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import {CheckCircle} from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";


const VideoCard = ({ video:{ id:{ videoId },snippet}}) => {
  return (
    <Card sx={{width:"320px"}} >
        <Link to={`/video/${videoId}`||demoVideoUrl}>
            <CardMedia 
              image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
              alt={snippet?.title}
              sx={{ width: 358,height: 180}}
            />
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={`/video/${videoId}` || demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 100) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray" sx={{
          display: 'flex',
          alignItems : 'center',
        }}>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px", }} />
        </Typography>
      </Link>
    </CardContent>
    </Card>
  )
}
export default VideoCard