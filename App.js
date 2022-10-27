import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Common/Header";
import Details from "./Page/details";
import Home from "./Page/Home";
import Login from "./Page/Login";
import User from "./Page/User";
function App() {
  return (
    <div className="App">
        <Router>
        <Header/>
        <Routes>
           <Route exact path="/" element={<Login/>} />
           <Route exact path="/Login" element={<Login/>} />
           <Route exact path="/" element={<Home/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/User" element={<User/>} />
          <Route  path="/Details/:id" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
