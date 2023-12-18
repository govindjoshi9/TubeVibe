import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import { Navbar, Feed, VideoDetail, ChanelDetail, SearchFeed } from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id'  element={<VideoDetail/>}/>
        <Route path='/channel/:id'  element={<ChanelDetail/>}/>
        <Route path='/seaarch/:serchTerm'  element={<SearchFeed/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
