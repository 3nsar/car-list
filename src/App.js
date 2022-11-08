import Main from "./Main.js"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Car from "./Car.js"
import ShoppingList from "./ShoppingList.js";
import Header from './Header.js';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Main />}/> 
    <Route path="/cars/:id" element={<Car/>} />
    <Route path="/shoppinglist" element={<ShoppingList/>} />
    </Routes>
  </Router>
  );
}

export default App;
