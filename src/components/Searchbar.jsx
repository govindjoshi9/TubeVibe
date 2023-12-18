import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { YoutubeSearchedForOutlined } from "@mui/icons-material";
import React from 'react'

const Searchbar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
          <IconButton type="button" sx={{p:'10px',color:'red'}}>
        <YoutubeSearchedForOutlined />
      </IconButton>
    </Paper>
  );
}

export default Searchbar
