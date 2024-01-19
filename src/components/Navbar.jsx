import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg"
import { SearchBar } from "./";

const Navbar = () => (
        <Stack direction="row"
           p={2} 
           sx={{
            justifyContent: "space-between",
            alignItems: "center",
            position:"sticky",
            backgroundColor: "#000",
            top: 0,
            zIndex: 1000
           }} 
        >
            <Link to="/" style={{display:"flex",alignItems:"center",}} >
                <img src={logo} alt="logo" height="45" />
                <Typography sx={{
                    color: "#005DD6",
                    opacity: 1,
                    fontWeight: "bold",
                    fontSize: "25px",
                    display: {md:"block",xs:"none"}
                }}> ViewTube</Typography>
            </Link>
            <SearchBar />
        </Stack>
);


export default Navbar;
