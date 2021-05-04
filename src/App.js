import './App.css';
import Chart from './Components/Dashboard/Chart';
import Dashboard from './Components/Dashboard/Dashboard';
import Deposits from './Components/Dashboard/Deposits';
import Orders from './Components/Dashboard/Orders';
import Title from './Components/Dashboard/Title';

function App() {
  return (
    <div className='App'>
      <Chart />
      <Dashboard />
      <Deposits />
      <Orders />
      <Title />
    </div>
  );
}

export default App;
