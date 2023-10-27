import '../src/assets/globalCss/global.css';
import { Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './Views/Dashboard/Dashboard';
import Property from './Views/Property/Property';
import Agent from "./Views/Agent/Agent"
import MyProfile from './Views/MyProfile/MyProfile';
import Review from './Views/Review/Review'
import Message from './Views/Message/Message'

function App() {
  return (
    <Routes>
       <Route path="/" element={<SignUp/>} />
       <Route path="/sign-in" element={<SignIn />} />
       <Route path='/dashboard' element={<Dashboard/>} />
       <Route path='/property' element={<Property/>} />
       <Route path='/agent' element={<Agent/>} />
       <Route path='/review' element={<Review/>} />
       <Route path='/message' element={<Message/>} />
       <Route path='/My-profile' element={<MyProfile/>} />
    </Routes>
  );
}


export default App;
