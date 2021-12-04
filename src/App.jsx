import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterApp from "./routers/RouterApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto">
          <RouterApp />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
