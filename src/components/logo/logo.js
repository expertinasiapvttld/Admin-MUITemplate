import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import logoImg from "../assets/img/noBgBlack.png"
// @mui
import { Box, Link } from "@mui/material";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        
      
      display:"flex",
      justifyContent:"center",
      width:"100%",
        // padding: 4,
        ...sx,
      }}
      {...other}
    >
      <img
        src={logoImg}
        style={{width:80}}
        alt="logo"
      />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
