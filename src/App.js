import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';

import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/Shared/SignUp';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="purchase" element={<Purchase></Purchase>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
