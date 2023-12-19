import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos, Sidebar } from "./";
import { fetchFromApi } from "../utils/fatchFromApi";

const Feed = () => {
  
  const [selectCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const data = fetchFromApi(`search?part=snippet&q=${selectCategory}`).then(
      (data) => setVideos(data.items)
    );
  }, [selectCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectCategory} <span style={{ color: "#F31503" }}>video</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
