import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import AppBar from "../dashboard/appbar/index";
//

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 20,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <StyledRoot>
      <AppBar />
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
