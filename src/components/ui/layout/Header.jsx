import React from "react";
import {
  Badge,
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import { LuLogOut } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import { RiMenuFold3Fill } from "react-icons/ri";

import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <React.Fragment>
      <Box
        component="header"
        className="header"
        borderBottom={1}
        borderColor={"divider"}
        bgcolor={"#fff"}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "64px",
            px: 2,
          }}
        >
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <IconButton
              onClick={() => setOpenNav(true)}
              sx={{ display: { lg: "none" } }}
            >
              <RiMenuFold3Fill />
            </IconButton>
            <Typography variant="h6">Dashboard</Typography>
          </Stack>
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <Tooltip title="Notifications">
              <Badge badgeContent={4} color="warning" variant="dot">
                <IconButton>
                  <IoNotifications />
                </IconButton>
              </Badge>
            </Tooltip>
            <Tooltip title="Logout">
              <IconButton>
                <LuLogOut />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Box>
      <MobileSidebar onClose={() => setOpenNav(false)} open={openNav} />
    </React.Fragment>
  );
};

export default Header;
