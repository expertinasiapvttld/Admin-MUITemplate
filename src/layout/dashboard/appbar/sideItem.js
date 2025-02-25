import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import { color } from "../../../theme/color";

export default function SideItem(props) {
  const { active = false, disabled, icon, title, index, path, open } = props;
  return (
    <List
      sx={{
        ...(active && {
          backgroundColor: color.main,
          color: "white",
        }),
        ...(disabled && {
          backgroundColor: "white",
        }),
      }}
    >
      <ListItem key={index} disablePadding sx={{ display: "block" }}>
        <Link to={path} style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                ...(active && {
                  color: "white",
                }),
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={title} sx={{ opacity: open ? 1 : 0,color:active ? "white":"" }} />
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  );
}
