import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Account from './Pages/Account'
import Activity from './Pages/Activity'
import Wallet from './Pages/Wallet'
import Promotion from './Pages/Promotion'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="activity" element={<Activity/>}/>
          <Route path="promotion" element={<Promotion/>}/>
          <Route path="wallet" element={<Wallet/>}/>
          <Route path="account" element={<Account/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
