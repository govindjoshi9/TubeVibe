import { useState, useEffect } from "react";
import { Box,  Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fatchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTearm } = useParams();

  useEffect(() => {
    const data = fetchFromApi(`search?part=snippet&q=${searchTearm}`).then(
      (data) => setVideos(data.items)
    );
  }, [searchTearm]);

  return (
    
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          Search Result for: <span style={{ color: "#F31503" }}>{searchTearm}</span> videos
        </Typography>

        <Videos videos={videos} />
      </Box>
  );
};

export default SearchFeed;
