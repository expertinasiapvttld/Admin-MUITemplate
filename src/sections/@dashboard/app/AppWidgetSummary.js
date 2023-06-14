// @mui
import PropTypes from "prop-types";
import {  styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
// components
import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({
  title,
  total,
  icon,
  bgColor,
  color,
  sx,
  backgroundImage,
  ...other
}) {
  return (
    <Card
      sx={{
        py: 4,
        boxShadow: 0,
        textAlign: "center",
        color: color,
        bgcolor: bgColor,

        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: color,
          backgroundImage: () => `linear-gradient(135deg, ${backgroundImage})`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </StyledIcon>

      <Typography variant="h3" style={{ fontSize: 32 }}>
        {fShortenNumber(total)}
      </Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
