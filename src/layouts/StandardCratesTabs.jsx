import React from "react";
import { Stack } from "@mui/material";
import { NavLink, useLocation, useNavigate, Outlet } from "react-router-dom";

const StandardCratesTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname === "/crates/standard")
      navigate("/crates/standard/active");
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
          <NavLink to="/crates/standard/active">Active</NavLink>
          <NavLink to="/crates/standard/deleted">Deleted</NavLink>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <NavLink to="/crates/standard/add">Add</NavLink>
        </Stack>
      </Stack>
      <Outlet />
    </>
  );
};

export default StandardCratesTabs;
