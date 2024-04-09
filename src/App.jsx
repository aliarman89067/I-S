import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Work from "./pages/Work";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/work/:id" element={<Work />} />
      </Routes>
    </div>
  );
}
