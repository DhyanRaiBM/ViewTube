import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed, Footer } from "./components"

const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: "#000" }}>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Feed />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed />} />
                </Routes>
                <Footer />
            </Box>
        </BrowserRouter>
    )
}
export default App