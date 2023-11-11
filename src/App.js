import { Route, Routes } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css'
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Vlog from './pages/vlog/Vlog';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/vlog' element={<Vlog/>}/>


    </Routes>
 
    </>
  );
}

export default App;
