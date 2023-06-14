import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@mui/material";
import { Icon } from "@iconify/react";
import { Helmet } from "react-helmet-async";
export default function DataTable() {
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
      label: "",
      options: {
        filter: false,
        sort: false,
        customBodyRender: () => {
          return (
            <>
              <Helmet>
                <title> DataTable </title>
              </Helmet>
              <Button onClick={() => alert("Edit")}>
                <Icon
                  icon="ri:edit-fill"
                  color="#21618C"
                  width="25"
                  height="25"
                />
              </Button>
              <Button
                onClick={() => alert("Delete")}
                style={{ marginLeft: "-1rem" }}
              >
                <Icon
                  icon="ic:baseline-delete"
                  color="red"
                  width="25"
                  height="25"
                />
              </Button>
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
