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

import { Home, Login, StandardActive, StandardDeleted } from "./screens";
import { StandardCratesTabs } from "./layouts";

const App = () => {
  const theme = React.useMemo(() => createTheme(themeSettings), []);
  const [openSmLoader, setOpenSmLoader] = React.useState(false);

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
              </Route>
              <Route path="limited" element={<div>Limited</div>} />
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
