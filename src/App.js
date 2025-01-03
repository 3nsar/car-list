import Main from "./Main.js"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Car from "./Car.js"
import Header from './Header.js';
import Login from './Login.js';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Main />}/> 
    <Route path="/login" element={<Login />}/> 
    <Route path="/cars/:id" element={<Car/>} />
    </Routes>
  </Router>
  );
}

export default App;
