import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import store from './state/store';
import { Provider } from "react-redux";

import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import EntityPage from "./pages/EntityPage";
import AboutPage from "./pages/AboutPage";
import ListPage from "./pages/ListPage";


export default function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/entity" element={<EntityPage />} />
            <Route path="/list" element={<ListPage />} />
            {/* <Route component={NotFoundPage} /> */}
          </Routes>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}
