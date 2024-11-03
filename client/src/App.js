import Home from "./screen/Home.jsx";
import Login from "./screen/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter,
Route,
Routes,
} from "react-router-dom";
import Signup from "./screen/Signup.jsx";
import AdminLogin from "./adminCompoents/AdminLogin.jsx";
// import Sidebar from "./adminCompoents/Sidebar.jsx";
import Admin from "./adminCompoents/Admin.jsx";
import Users from "./adminCompoents/Users.jsx";
import Category from "./adminCompoents/Category.jsx";
import Products from './adminCompoents/Products.jsx'

 
function App() {
// Navigate()--

  return (


<BrowserRouter>

<Routes>

  <Route exact path="/admin-login" element={<AdminLogin/>}/>
  <Route exact path="/admin" element={<Admin/>}/>
  <Route exact path="/admin-users" element={<Users/>}/>
  <Route exact path="/admin-category" element={<Category/>}/>
  <Route exact path="/admin-products" element={<Products/>}/>

  
  

 <Route exact path='/' element={<Home/>} />
  
 
 <Route exact path='/login' element={<Login/>} />
 <Route exact path='/signup' element={<Signup/>} />

</Routes>




</BrowserRouter>

  )


    
  
}

export default App;
