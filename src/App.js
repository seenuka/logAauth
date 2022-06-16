
import './App.css';
import Signup from './Pages/Signup'
import {Routes,Route} from "react-router-dom"
import Alert from './Pages/Alert';
import Login from './Pages/Login';
import Home from './Pages/Home'
import Resetpassword from './Pages/Resetpassword';
function App() {
  // const {user} =UserState()
  return (
    <div>
      <Alert/>
      <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgot' element={<Resetpassword/>}/>

            </Routes>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
  
    </div>
  
    )}

export default App;
