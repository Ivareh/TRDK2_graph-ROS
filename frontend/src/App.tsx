import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import EntityPage from "./pages/EntityPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/entity" element={<EntityPage />} />
          {/* <Route component={NotFoundPage} /> */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}