import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      mssg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils- Light Mode";
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
        <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={Mode}
            />
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;


// /users --> Component1
// /users/Home --> Component2