import React from "react";
import {
  FormControl,
  Typography,
  TextField,
  Autocomplete,
  Chip,
} from "@mui/material";

const MyChipsAutocomplete = ({ title, options = [], ...props }) => {
  return (
    <>
      {title && <Typography variant="label">{title}</Typography>}
      <FormControl fullWidth>
        <Autocomplete
          options={options}
          clearIcon={false}
          freeSolo
          multiple
          renderTags={(value, props) =>
            value.map((option, index) => (
              <Chip label={option} key={index} {...props({ index })} />
            ))
          }
          defaultValue={[]}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => <TextField {...params} />}
          {...props}
        />
      </FormControl>
    </>
  );
};

export { MyChipsAutocomplete };
