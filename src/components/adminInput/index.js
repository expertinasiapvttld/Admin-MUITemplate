import { TextField, Typography } from "@mui/material";
import React from "react";
import "./index.css";
import { color } from "../../theme/color";
import InputAdornment from "@mui/material/InputAdornment";

export default function AdminInput(props) {
  const { title, type, formError, value, onChange, endIcon,PasswordShowClick } = props;
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        type={type}
        InputLabelProps={{
          style: { color: color.main },
        }}
        onChange={onChange}
        value={value}
        id={type}
        label={title}
        name={type}
        autoComplete={type}
        InputProps={{
          endAdornment: (
            <InputAdornment onClick={PasswordShowClick} position="end">{endIcon}</InputAdornment>
          ),
        }}
      />
      <Typography sx={{ color: "red", fontSize: 15, ml: 1 }}>
        {formError ? formError : ""}
      </Typography>
    </>
  );
}
