import './App.css';
import Home from"./Components/Home";
import Add from "./Components/Add";
import Edit from './Components/Edit';
import "bootstrap/dist/css/bootstrap.min.css";




import{BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  return (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element = {<Add />} />
        <Route path="/edit" element = {<Edit />} />
          

      </Routes>
    </Router>
    </div>
 
  );  
} 

export default App;
