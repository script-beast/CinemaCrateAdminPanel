import React from "react";
import { Stack } from "@mui/material";
import { NavLink, useLocation, useNavigate, Outlet } from "react-router-dom";

const StandardCratesTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname === "/crates/premium") navigate("active");
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
          <NavLink to="/crates/premium/active">Active</NavLink>
          <NavLink to="/crates/premium/deleted">Deleted</NavLink>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <NavLink to="/crates/premium/add">Add</NavLink>
        </Stack>
      </Stack>
      <Outlet />
    </>
  );
};

export default StandardCratesTabs;
