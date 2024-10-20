import React from "react";
import { Stack } from "@mui/material";
import { NavLink, useLocation, useNavigate, Outlet } from "react-router-dom";

const StandardCratesTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname === "/crates/limited") navigate("active");
  }, [location.pathname]);

  return (
    <>
      <Stack
        mt={2}
        direction={"row"}
        justifyContent={"space-between"}
        className="uppertabs"
      >
        <Stack spacing={2} direction={"row"}>
          <NavLink to="/crates/limited/active">Active</NavLink>
          <NavLink to="/crates/limited/inactive">Inactive</NavLink>
          <NavLink to="/crates/limited/deleted">Deleted</NavLink>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <NavLink to="/crates/limited/add">Add</NavLink>
        </Stack>
      </Stack>
      <Outlet />
    </>
  );
};

export default StandardCratesTabs;
