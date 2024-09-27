import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/NavBar';
import ViewChildren from './Pages/ViewChildren';
import ChildForm from './Pages/ChildForm';


function App() {
  return (
    <div className= "App bg-gradient-to-br from-blue-100 to-purple-200">
     <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/view-children" element={<ViewChildren/>} />
          <Route path="/add-form" element={<ChildForm/>} />
        </Routes>
    </div>
  );
}

export default App;
