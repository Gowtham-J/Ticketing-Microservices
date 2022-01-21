import PropTypes from "prop-types";
// material
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  // return (

  // <Box
  //   component="img"
  //   src="https://i.pinimg.com/originals/86/dd/8b/86dd8bf8c98282ec2fa932b12ef231ae.jpg"
  //   sx={{ width: 40, height: 40, ...sx }}
  // />
  // );
  return (
    <Box
      component="img"
      src="/static/logo.svg"
      sx={{ width: 40, height: 40, ...sx }}
    />
  );
}
