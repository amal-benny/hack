import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/NavBar';
import ViewChildren from './Pages/ViewChildren';
import { onAuthStateChanged , getAuth } from 'firebase/auth';
import ChildForm from './Pages/ChildForm';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Context/authContext';
import Dashboard from './Pages/Dashboard';
import Achievements from './Pages/Achievements';
import DailyRecipe from './Pages/DailyRecipe';
import AddAch from './Pages/AddACh';
import Milestone from "./Pages/Milestone"


function App() {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  if(!user){
    navigate("/login")
  }
  return (
    <div className= "App bg-gradient-to-br from-blue-100 to-purple-200">
     {
      user ? <Navbar/>:
      ""
     }
      {/* <Navbar/> */}
     <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/milestones" element={<Milestone />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/view-children" element={<ViewChildren/>}/>
          <Route path="/add-form" element={<ChildForm/>} />
          <Route path="/manage-children" element={<ViewChildren/>} />
          <Route path="/achievements" element={<Achievements/>} />
          <Route path="/recipes" element={<DailyRecipe/>} />
          <Route path="/add-ach" element={<AddAch/>} />
        </Routes>
    </div>
  );
}

export default App;
