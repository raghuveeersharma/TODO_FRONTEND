import "./App.css";
import Input from "./components/Input.jsx";
import Navbar from "./components/Navbar.jsx";
import React from "react";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Input />
        </div>
      </div>
    </>
  );
}

export default App;
