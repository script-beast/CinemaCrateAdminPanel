import React from "react";
import { MyDataGridServer, MyDataSearch } from "../../../components/templates";
import { Box, Stack } from "@mui/material";

const Active = () => {
  return (
    <Stack spacing={2} mt={2}>
      <Stack direction={"row"}>
        <MyDataSearch />
      </Stack>
      <Box sx={{ height: 400, width: "100%" }}>
        <MyDataGridServer />
      </Box>
    </Stack>
  );
};

export default Active;
