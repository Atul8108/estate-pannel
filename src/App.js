import "../src/assets/globalCss/global.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./Views/Dashboard/Dashboard";
import Property from "./Views/Property/Property";
import Agent from "./Views/Agent/Agent";
import MyProfile from "./Views/MyProfile/MyProfile";
import Review from "./Views/Review/Review";
import Message from "./Views/Message/Message";
import Agentdetails from "./Views/Agent/Agentdetails";
import AddProperty from "./Views/AddProperty/AddProperty";
import { useEffect, useState } from "react";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import Otp from "./components/Otp/Otp";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let htmlEle = document.querySelector(":root");
    htmlEle.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme == "dark") {
      setIsDark(storedTheme == "dark");
    }
  }, []);
  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  return (
    <>
      <div style={{ position: "absolute", left: "161px", top: "11px" }}>
        <ThemeChanger isChecked={isDark} handleChange={toggleTheme} />
      </div>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route exact path="/review" element={<Review />} />
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/My-profile" element={<MyProfile />} />

        <Route exact path="/property/">
          <Route index element={<Property />} />
          <Route path="add_property" element={<AddProperty />} />
        </Route>

        <Route path="/agent/">
          <Route index element={<Agent />} />
          <Route path="details/:agentId" element={<Agentdetails />} />
        </Route>
        <Route path="/enter-otp" element={<Otp/>} />
      </Routes>
    </>
  );
}
export default App;
