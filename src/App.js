import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/register" exact element={<Register/>}/>
    <Route path="/search" exact element={<Search/>}/>
    <Route path="/delete" exact element={<Delete/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
