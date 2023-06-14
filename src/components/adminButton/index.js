import { Button } from "@mui/material";
import React from "react";
import { color } from "../../theme/color";

export default function AdminButton(props) {
  const { fullWidth, title, onClick } = props;
  return (
    <Button
      fullWidth={fullWidth}
      type="submit"
      variant="contained"
      sx={{
        mt: 3,
        mb: 2,
        color: "white",
        backgroundColor: color.main,
        height: 40,
        ":hover": {
          color: "white",
          backgroundColor: color.main,
        },
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
