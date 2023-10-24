import  { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import PaymentInfo from './pages/PaymentInfo';
import Expense from './pages/Expense';
import AddFee from './pages/AddFee';
import Infoupdate from './pages/Infoupdate';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  return (
  
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Home /> : navigate('/login') }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={() => setAuthenticated(true)} />} />
        <Route path="/addmember" element={<AddMember />} />
        <Route path="/paymentinfo" element={<PaymentInfo />} />
        <Route path="/addfee" element={<AddFee />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/updateinfo/:id" element={<Infoupdate />} />
      </Routes>
    
  );
}

export default App;
