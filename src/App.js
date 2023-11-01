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

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SignUp />} />
      <Route exact path="/sign-in" element={<SignIn />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      
      <Route exact path="/review" element={<Review />} />
      <Route exact path="/message" element={<Message />} />
      <Route exact path="/My-profile" element={<MyProfile />} />

      <Route exact path="/property/">
        <Route index  element={<Property />}/>
        <Route path="add_property" element={<AddProperty />} />
      </Route>

      <Route path="/agent/">
        <Route index element={<Agent />} />
        <Route path="details/:agentId" element={<Agentdetails />} />
      </Route>

    </Routes>
  );
}
export default App;
