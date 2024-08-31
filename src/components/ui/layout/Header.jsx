import React from "react";
import { Avatar, Badge, Box, IconButton, Stack, Tooltip } from "@mui/material";

import { FaRegCircleUser } from "react-icons/fa6";

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
        bgcolor={"success.main"}
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
              onClick={() => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: "none" } }}
            >
              <FaRegCircleUser />
            </IconButton>
            <Tooltip title="Search">
              <IconButton>
                <FaRegCircleUser />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <Tooltip title="Contacts">
              <IconButton>
                <FaRegCircleUser />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <Badge badgeContent={4} color="success" variant="dot">
                <IconButton>
                  <FaRegCircleUser />
                </IconButton>
              </Badge>
            </Tooltip>
            <Avatar
              // onClick={userPopover.handleOpen}
              // ref={userPopover.anchorRef}
              src="/assets/avatar.png"
              sx={{ cursor: "pointer" }}
            />
          </Stack>
        </Stack>
      </Box>
      {/* <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} /> */}
      <MobileSidebar
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
};

export default Header;
