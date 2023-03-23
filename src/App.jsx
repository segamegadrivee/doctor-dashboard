import './App.scss';
import Dashboard from './pages/Dashboard';
import Appointment from './pages/Appointment';
import Transaction from './pages/Transaction';
import BurgerMenu from './components/BurgerMenu';




function App() {
  return (
    <div className="App">
      <Transaction />
      <BurgerMenu />
      {/* <Dashboard />
      <Appointment /> */}


    </div>
  )
}

export default App;
