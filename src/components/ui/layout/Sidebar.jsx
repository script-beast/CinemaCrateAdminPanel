import React from "react";

import {
  Box,
  Stack,
  Typography,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { link } from "../../../constants";
import SubList from "./dependencies/SubList";

const SideNav = () => {
  return (
    <Box
      bgcolor={"sidebar.background"}
      color={"sidebar.color"}
      className="sidenav"
    >
      <Stack sx={{ p: 3 }}>
        <Typography variant="body2">Cinema Crate</Typography>
        <Typography variant="subtitle1">Admin Panel</Typography>
      </Stack>
      <Divider />
      <Stack
        spacing={1}
        sx={{
          p: 1,
          m: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": { width: "0.4em" },
        }}
      >
        {link.map((item, index) => (
          <Stack spacing={0} key={index}>
            {item.links ? (
              <SubList link={item} />
            ) : (
              <NavLink to={item.link} unstable_viewTransition>
                {({ isActive }) => (
                  <ListItemButton
                    variant="sidebarLink"
                    sx={{ pl: 1 }}
                    selected={isActive}
                  >
                    <ListItemIcon sx={{ minWidth: "25px", color: "inherit" }}>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                )}
              </NavLink>
            )}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default SideNav;
