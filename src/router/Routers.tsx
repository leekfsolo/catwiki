import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BreedDetail from "../app/breed-detail";
import Home from "../app/home";
import Popular from "../app/popular";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:breed_id" element={<BreedDetail />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </Router>
  );
};

export default Routers;
