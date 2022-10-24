import Main from "./Main.js"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CardInfo from "./CardInfo.js";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Main />}/> 
    <Route path="/car/:id" element={<CardInfo />}/> 
    </Routes>
  </Router>
  );
}

export default App;
