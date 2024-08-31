import React from "react";
import {
  FormControl,
  Typography,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import { PiEye, PiEyeClosed } from "react-icons/pi";

const MyTextField = ({ title, ...props }) => {
  return (
    <>
      {title && <Typography variant="label">{title}</Typography>}
      <FormControl fullWidth>
        <TextField {...props} />
      </FormControl>
    </>
  );
};

const MyCheckbox = ({ title, id, ...props }) => {
  const labelId = id || Math.random().toString(36).substring(7);
  return (
    <>
      {title && (
        <Typography variant="label" htmlFor={labelId} component="label">
          {title}
        </Typography>
      )}
      <FormControl fullWidth>
        <Checkbox id={labelId} {...props} />
      </FormControl>
    </>
  );
};

const MySelect = ({ title, options = [], ...props }) => {
  return (
    <>
      {title && <Typography variant="label">{title}</Typography>}
      <FormControl fullWidth>
        <Select {...props}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

const MyPasswordField = ({ title, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      {title && <Typography variant="label">{title}</Typography>}
      <FormControl variant="outlined" fullWidth>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <PiEyeClosed /> : <PiEye />}
              </IconButton>
            </InputAdornment>
          }
          {...props}
        />
      </FormControl>
    </>
  );
};

export { MyTextField, MyCheckbox, MySelect, MyPasswordField };
