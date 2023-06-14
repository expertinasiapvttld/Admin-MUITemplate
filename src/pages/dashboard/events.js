import React from "react";
import MUIDataTable from "mui-datatables";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { color } from "../../theme/color";
import { Helmet } from "react-helmet-async";
export default function Events() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const columns = [
    {
      name: "name",
      label: "Name",

      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "city",
      label: "City",

      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "Start",

      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "startDate",
      label: "Start Date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "endDate",
      label: "End Date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "",
      label: "action",
      options: {
        filter: false,
        sort: false,
        customBodyRender: () => {
          return (
            <>
            <Helmet>
                <title> Events </title>
              </Helmet>
              <Button onClick={handleClick} aria-describedby={id}>
                <Icon
                  icon="ph:dots-three-circle-vertical-fill"
                  color={color.main}
                  width="30"
                  height="30"
                />
              </Button>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => alert("Edit")}>
                      <ListItemIcon>
                        <Icon
                          icon="ri:edit-fill"
                          color="#21618C"
                          width="25"
                          height="25"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Edit"
                        style={{ marginLeft: "-1rem" }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => alert("Delete")}>
                      <ListItemIcon>
                        <Icon
                          icon="ic:baseline-delete"
                          color="red"
                          width="25"
                          height="25"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Delete"
                        style={{ marginLeft: "-1rem" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>
            </>
          );
        },
      },
    },
  ];

  const data = [
    {
      name: "Joe James",
      location: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "10/01/2021",
      endDate: "05/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "15/01/2021",
      endDate: "06/04/20222",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      startDate: "17/01/2021",
      endDate: "07/04/20222",
    },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
      startDate: "19/01/2021",
      endDate: "08/04/20222",
    },
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "21/01/2021",
      endDate: "09/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "22/01/2021",
      endDate: "10/04/20222",
    },
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "24/01/2021",
      endDate: "11/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "26/01/2021",
      endDate: "13/04/20222",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      startDate: "27/01/2021",
      endDate: "14/04/20222",
    },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
      startDate: "29/01/2021",
      endDate: "15/04/20222",
    },
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "29/01/2021",
      endDate: "16/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "08/01/2021",
      endDate: "18/04/20222",
    },
    {
      name: "Joe James",
      location: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "10/01/2021",
      endDate: "05/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "15/01/2021",
      endDate: "06/04/20222",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      startDate: "17/01/2021",
      endDate: "07/04/20222",
    },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
      startDate: "19/01/2021",
      endDate: "08/04/20222",
    },
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "21/01/2021",
      endDate: "09/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "22/01/2021",
      endDate: "10/04/20222",
    },
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "24/01/2021",
      endDate: "11/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "26/01/2021",
      endDate: "13/04/20222",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      startDate: "27/01/2021",
      endDate: "14/04/20222",
    },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
      startDate: "29/01/2021",
      endDate: "15/04/20222",
    },
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "29/01/2021",
      endDate: "16/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "08/01/2021",
      endDate: "18/04/20222",
    },
    {
      name: "Joe James",
      location: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "10/01/2021",
      endDate: "05/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "15/01/2021",
      endDate: "06/04/20222",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      startDate: "17/01/2021",
      endDate: "07/04/20222",
    },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
      startDate: "19/01/2021",
      endDate: "08/04/20222",
    },
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "21/01/2021",
      endDate: "09/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "22/01/2021",
      endDate: "10/04/20222",
    },
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "24/01/2021",
      endDate: "11/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "26/01/2021",
      endDate: "13/04/20222",
    },
    {
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
      startDate: "27/01/2021",
      endDate: "14/04/20222",
    },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
      startDate: "29/01/2021",
      endDate: "15/04/20222",
    },
    {
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
      startDate: "29/01/2021",
      endDate: "16/04/20222",
    },
    {
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
      startDate: "08/01/2021",
      endDate: "18/04/20222",
    },
  ];

  return (
    <div className="App wrapper">
      <h4>React MUI Datatable </h4>

      <MUIDataTable
        title={"Events List"}
        data={data}
        columns={columns}
        options={{
          selectableRows: false, // <===== will turn off checkboxes in rows
        }}
      />
    </div>
  );
}
