import React from "react";
import { Box, Container } from "@mui/material";
import { Header, Sidebar, Footer } from "../components/ui";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: "100%",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          pl: { lg: "280px" },
        }}
      >
        <Header />
        <Container variant="main" maxWidth="lg" sx={{ minHeight: "90vh" }}>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default Page;
