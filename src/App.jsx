import React from "react";
import "./App.css";

import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import themeSettings from "./theme";

import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoutes from "./components/ProtectedRoutes";

import { Home, Login } from "./screens";
import { StandardActive, StandardDeleted, StandardEdit } from "./screens";

import {
  LimitedActive,
  LimitedDeleted,
  LimitedEdit,
  LimitedInactive,
} from "./screens";

import {
  StandardCratesTabs,
  LimitedCratesTabs,
  PremiumCratesTabs,
} from "./layouts";

const App = () => {
  const theme = React.useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="" element={<Home />} />
            <Route path="dashboard" element={<div>Dashboard</div>} />
            <Route path="store" element={<div>Store</div>} />
            <Route path="crates">
              <Route path="standard" element={<StandardCratesTabs />}>
                <Route path="active" element={<StandardActive />} />
                <Route path="deleted" element={<StandardDeleted />} />
                <Route path="add" element={<StandardEdit />} />
                <Route path="edit/:id" element={<StandardEdit isEdit />} />
              </Route>
              <Route path="limited" element={<LimitedCratesTabs />}>
                <Route path="active" element={<LimitedActive />} />
                <Route path="inactive" element={<LimitedInactive />} />
                <Route path="deleted" element={<LimitedDeleted />} />
                <Route path="add" element={<LimitedEdit />} />
                <Route path="edit/:id" element={<LimitedEdit isEdit />} />
              </Route>
              <Route path="premium" element={<div>Premium</div>} />
            </Route>
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          theme="dark"
          autoClose={3000}
          pauseOnFocusLoss
          draggable
          stacked
        />
        <Backdrop id="sm-loader" sx={{ zIndex: 999999 }} open={false}>
          <CircularProgress color="primary" />
        </Backdrop>
      </ThemeProvider>
    </>
  );
};

export default App;
