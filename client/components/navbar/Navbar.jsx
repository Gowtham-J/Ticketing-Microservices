import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

export default function NavBar({ currentUser }) {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup", logo: "" },
    !currentUser && { label: "Sign In", href: "/auth/signin", logo: "" },
    currentUser && {
      label: "Sell Tickets",
      href: "/tickets/new",
      logo: <LocalActivityIcon />,
    },
    currentUser && {
      label: "My Orders",
      href: "/orders",
      logo: <ShoppingCartIcon />,
    },
    currentUser && {
      label: "Sign Out",
      href: "/auth/signout",
      logo: <LogoutIcon />,
    },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href, logo }) => {
      return (
        <Link key={href} href={href}>
          <Button color="inherit" sx={{ margin: 0.5 }}>
            {logo}
            {label}
          </Button>
        </Link>
      );
    });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GitTix
            </Typography>
          </Link>
          {links}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
