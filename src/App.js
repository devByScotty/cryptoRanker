import './App.css';
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coins from './pages/Coins/Coins';
import Details from './pages/Detail/Details';



function App() {
  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/coins' element={ <Coins />} />
      <Route path='/details/:uuid' element={ <Details />} />
      </Routes>
     

      </BrowserRouter> 
      
    
    
  );
}

export default App;
