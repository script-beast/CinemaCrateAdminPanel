import React from "react";
import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";

const MobileSidebar = ({ open, onClose }) => {
  return (
    <Drawer usage="sidebar" onClose={onClose} open={open}>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box
          alignItems={"center"}
          display={"flex"}
          border={1}
          borderRadius={12}
          cursor={"pointer"}
          borderColor={"divider"}
          padding={"4px 12px"}
        >
          <Box sx={{ flex: "1 1 auto" }}>
            <Typography color="var(--mui-palette-neutral-400)" variant="body2">
              Workspace
            </Typography>
            <Typography color="inherit" variant="subtitle1">
              Crate Admin Panel
            </Typography>
          </Box>
          <FaRegCircleUser />
        </Box>
      </Stack>
      <Divider sx={{ borderColor: "var(--mui-palette-neutral-700)" }} />
      <Box component="nav" sx={{ flex: "1 1 auto", p: "12px" }}>
        {/* {renderNavItems({ pathname, items: navItems })} */}
      </Box>
      {/* <Divider sx={{ borderColor: "var(--mui-palette-neutral-700)" }} />
      <Stack spacing={2} sx={{ p: "12px" }}>
        <div>
          <Typography
            color="var(--mui-palette-neutral-100)"
            variant="subtitle2"
          >
            Need more features?
          </Typography>
          <Typography color="var(--mui-palette-neutral-400)" variant="body2">
            Check out our Pro solution template.
          </Typography>
        </div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            alt="Pro version"
            src="/assets/devias-kit-pro.png"
            sx={{ height: "auto", width: "160px" }}
          />
        </Box>
        <Button
          component="a"
          endIcon={<FaRegCircleUser fontSize="var(--icon-fontSize-md)" />}
          fullWidth
          href="https://material-kit-pro-react.devias.io/"
          sx={{ mt: 2 }}
          target="_blank"
          variant="contained"
        >
          Pro version
        </Button>
      </Stack> */}
    </Drawer>
  );
};

export default MobileSidebar;
