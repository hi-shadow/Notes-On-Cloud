

import { useState } from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Signin from "./Components/Signin";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toast from "./Components/Toast";
import { ToastContainer, toast } from "react-toastify";

function App() {

  const [alert, setAlert] = useState(true);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />

          </Routes>
        </Router>



      </ NoteState >

    </>
  );
}

export default App;
