
import {BrowserRouter as Router,Routes,Route} from "react-router-dom" 
import Home from './pages/Home'
import ProductPage from "./pages/User"
import "./index.css"
import Nav from "./components/Nav"
import User
 from "./pages/User"
 import Orders from "./pages/Orders"
 import Delivery
  from "./pages/Delivery"
  import Notification from "./pages/Notification"

  import Payments from "./pages/Payments"
 
  import Setting from "./pages/Setting"
  import Logout from "./pages/Logout"
 
  




function App() {


  return (
    <>
    <Router>
     
      <Routes>
 
  
        <Route excat path = "/" element = {<Home/>}></Route>
        <Route excat path = "/user" element = {<User/>}></Route>
        <Route excat path = "/productPage" element = {<ProductPage/>}></Route>
        <Route excat path = "/productPage" element = {<ProductPage/>}></Route>
        <Route excat path = "/productPage" element = {<ProductPage/>}></Route>
        <Route excat path = "/productPage" element = {<ProductPage/>}></Route>
        <Route excat path = "/productPage" element = {<ProductPage/>}></Route>
        <Route excat path = "/productPage" element = {<ProductPage/>}></Route>
     
      

    
      </Routes>
    </Router>

    
    </>
  )
}

export default App
