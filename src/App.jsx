import './App.scss';
import Dashboard from './pages/Dashboard';
import Appointment from './pages/Appointment';
import Transaction from './pages/Transaction';
import BurgerMenu from './components/BurgerMenu';
import DetailsPatient from './components/DetailsPatient';
import DocProfile from './pages/DocProfile';
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/Appointment' element={<Appointment />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Docpofile' element={<DocProfile />} />
        <Route path='/Transaction' element={<Transaction />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>


      <BurgerMenu />




    </div>
  )
}

export default App;
