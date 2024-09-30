import React from "react";
import { Box, Stack } from "@mui/material";
import { MyDataGridServer, MyDataSearch } from "../../../components/templates";
import { useDebounce } from "../../../hooks";

const Active = () => {
  const [searchText, setSearchText] = React.useState("");

  const loadData = () => {
    console.log("Loading data...");
  };

  React.useEffect(() => {
    loadData();
  }, []);

  useDebounce(loadData, 500, [searchText]);

  return (
    <Stack spacing={2} mt={2}>
      <Stack direction={"row"}>
        <MyDataSearch
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={"Search for crates"}
        />
      </Stack>
      <Box sx={{ height: 400, width: "100%" }}>
        <MyDataGridServer rowCount={100} />
      </Box>
    </Stack>
  );
};

export default Active;
