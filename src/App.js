import Main from "./Main.js"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Car from "./Car.js"
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Main />}/> 
    <Route path="/cars/:id" element={<Car/>} />
    </Routes>
  </Router>
  );
}

export default App;
