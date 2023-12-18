import {Routes, Route} from 'react-router-dom'
import Entries from './Entries';
import Details from './pages/Details';
import Categories from './pages/Categories';
import Register from './pages/Register';
import Login from './pages/Login';
import Search from './pages/Search';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/entries' element={<Entries/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/complaint/:compId' element={<Details/>}/>
        <Route path='/categories/:cat' element={<Categories/>}/>
        <Route path='/search/:location' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
