import { GitHub, Instagram, LinkedIn } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box sx={{
        backgroundBlendMode:"multiply",
        height:{ sm :"200px",xs:"150px"},
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        borderTop:"1px solid gray"
      }} >
        <Box  sx={{
          opacity:0.6,
          color:"#3A3A3A",
          color:"gray",
          justifyContent:"center",
          alignItems:"center",
          display:"inline-flex",
          flexDirection:"column",
          boxShadow: "2px 1px 1px 2px #000",
          p:2,
        }}>
          {/* <Typography variant="h4" sx={{fontSize:{xs:"20px" ,md:"25px"} ,fontWeight:"bold",textShadow: "2px 2px 4px #000"}}>Designed and Developed By </Typography>
          <Typography variant="h4" sx={{fontSize:{xs:"20px" ,md:"25px"},fontWeight:"bold",textShadow: "2px 2px 4px #000"}}>Dhyan Rai</Typography> */}
          <Box sx={{ display:"flex",gap:1 ,mt:2,boxShadow: "0 4px 0 -2px #fff",}}>
            <a href="https://github.com/DhyanRaiBM" style={{opacity:0.7,color:"#fff"}}><GitHub sx={{fontSize:{xs:"30px" ,md:"40px"}}}/></a>
            <a href="https://www.instagram.com/_dhyan_rai?igsh=MWloNXM2YXV6ZDZrag==" style={{opacity:0.7,color:"#fff"}}><Instagram sx={{fontSize:{xs:"30px" ,md:"40px"}}}/></a>
            <a href="https://www.linkedin.com/in/dhyan-rai-bm" style={{opacity:0.7,color:"#fff"}}><LinkedIn sx={{fontSize:{xs:"30px" ,md:"40px"}}}/></a>
          </Box>
          <Typography className="copyright" variant="body2" sx={{ mt: 2, color: "#fff",opacity:0.5 }}>
          Designed And Developed By 
        </Typography>
        <Typography className="copyright" variant="body2" sx={{ color: "#fff",opacity:0.5,fontWeight:"bold" }}>
          Dhyan Rai  
        </Typography>
        </Box>
      </Box>
  )
}
export default Footer