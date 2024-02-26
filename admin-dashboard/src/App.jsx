
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './component/FooterComponent';
import SideBarComponent from './component/SideBarComponent';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <Routes>
      
        
        <Route path='/footer' element={<FooterComponent></FooterComponent>}></Route>
        <Route path='/dashboard'element={<SideBarComponent></SideBarComponent>}>
          <Route path='' element={<Home></Home>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
