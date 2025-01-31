
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users';
import CreateUsers from './CreateUser';
import UpdateUsers from './UpdateUser';
import Navbar from '../src/Navbar';
import AdminAuthPage from './components/AdminAuthPage';



function App()
{

  
  return(
    
      
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<AdminAuthPage />} />
        <Route path='/admin' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUsers/>}></Route>
        <Route path='/update/:id' element={<UpdateUsers/>}></Route>

      </Routes>
    
    </div>
    </BrowserRouter>
  )
}

export default App;