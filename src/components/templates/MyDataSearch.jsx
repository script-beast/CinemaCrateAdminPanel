import React from "react";
import { TextField, InputAdornment, useTheme } from "@mui/material";
import { RiMenuSearchLine } from "react-icons/ri";

const MyDataSearch = ({ ...props }) => {
  const theme = useTheme();

  return (
    <TextField
      id="input-with-icon-textfield"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <RiMenuSearchLine size={28} color={theme.palette.primary.main} />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      {...props}
    />
  );
};

export default MyDataSearch;
