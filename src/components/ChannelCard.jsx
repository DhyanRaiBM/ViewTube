import { Link } from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import {CheckCircle} from "@mui/icons-material"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <Card sx={{
      width:"320px",
      background:"transparent",
      display :"flex",
      justifyContent:"center",
      alignItems:"center",
      marginTop,
      boxShadow: "none",
    }}>
      <Link to={ channelDetail?.id?.channelId!== undefined ?`/channel/${channelDetail?.id?.channelId}`:`/channel/${channelDetail?.id}`} sx={{ display :"flex",justifyContent:"center",alignItems:"center", }} >
        <CardContent >
          <CardMedia
              image={ channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.channelTitle}
              sx={{ width:180 , height:180,borderRadius:"50%",}}
          />
          <Typography variant="h6" color="#ffff" sx={{
              display: 'flex',
              alignItems : 'center',
              mt:2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"

          }}>
              {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: "16px", color: "#fff", ml: "5px", }} />
        </Typography>
          {
            channelDetail?.statistics && (
              <Typography 
              variant="caption" 
              color="gray" 
              sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
              }} 
              >
              {channelDetail?.statistics?.subscriberCount} Subscribers
              </Typography>
            )
          }
        </CardContent>
      </Link>
    </Card>
  )
}
export default ChannelCard

