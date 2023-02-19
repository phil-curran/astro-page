import { Routes, Route } from "react-router-dom";
import { Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// components
import Navbar from "./components/Navbar";
import Date from "./components/Date";

// pages
import Home from "./pages/Home";
import Hours from "./pages/Hours";
import Ephemeris from "./pages/Ephemeris";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header as="h1" textAlign="center">
        <Date />
      </Header>
      <div className="ui container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/ephemeris" element={<Ephemeris />} />
        </Routes>
      </div>
    </div>
  );
}
