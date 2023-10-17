import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import './index.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import PaymentInfo from './pages/PaymentInfo';
import Expense from './pages/Expense';
// import LogOut from './pages/LogOut';
import AddFee from './pages/AddFee';


function App() {


  return (
    <>
 
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home></Home>}/>
      <Route path="/signup" element={<SignUp></SignUp>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/addmember" element={<AddMember></AddMember>}/>
      
      <Route path="/paymentinfo" element={<PaymentInfo></PaymentInfo>}/>
      <Route path="/addfee" element={<AddFee></AddFee>}/>
      <Route path="/expense" element={<Expense></Expense>}/>
      {/* <Route path="/logout" element={<LogOut></LogOut>}/> */}
      
      </Routes>    
    
    </BrowserRouter>
        
    </>
  )
}

export default App
