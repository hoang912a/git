import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Register from "./pages/login/register";
import Dashbroad from "../src/admin/components/Dashbroad"
import {useSelector} from 'react-redux'
function App() {
  const islogin= useSelector(state=>state.auth.islogin)
  const role= useSelector(state=>state.auth.role)
  return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Dashbroad />} />
        {islogin&&role==='admin'&&  <Route path="/login" element={<Dashbroad/>} />} */}
          <Route path="/" element={<Home />} />
        <Route path="/dashbroad" element={<Dashbroad/>}/>
        <Route path="/register"  />
        </Routes>
      </Router>
  );
}
export default App;
