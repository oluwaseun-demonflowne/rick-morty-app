import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register'
import LoginPage from './pages/LoginPage'
import Feed from './components/Feed';
import SearchPage from './pages/SearchPage';
import FullProfileDetail from './components/FullProfileDetail';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/register' element={<Register />}/>
      <Route path='/' element={<LoginPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/feed' element={<Feed />}/>
      <Route path='/search' element={<SearchPage />}/>
      <Route path='/:id' element={<FullProfileDetail />} /> 
      </Routes>
    </div>
  );
}

export default App;
