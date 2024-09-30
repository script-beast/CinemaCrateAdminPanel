import React from "react";
import { MyDataGridServer, MyDataSearch } from "../../../components/templates";
import { Box, Stack } from "@mui/material";

const Inactive = () => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <Stack spacing={2} mt={2}>
      <Stack direction={"row"}>
        <MyDataSearch
          searchText={searchText}
          setSearchText={(e) => setSearchText(e.target.value)}
          placeholder={"Search for crates"}
        />
      </Stack>
      <Box sx={{ height: 400, width: "100%" }}>
        <MyDataGridServer />
      </Box>
    </Stack>
  );
};

export default Inactive;
