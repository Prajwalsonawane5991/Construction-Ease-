
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListContractorsComponent from './Components/ListContractorsComponent';
import AddContractorComponent from './Components/AddContractorComponent';
import RegisterContractorComponent from './Components/RegisterContractorComponent';

function App() {
  return (
  
    <div>
      <Router>
      <HeaderComponent></HeaderComponent>
      <div className="App">
          <Routes>
          {/* <Route path="/" element={<ListContractorsComponent></ListContractorsComponent> }></Route> */}
          <Route path="/contractor" element={<ListContractorsComponent></ListContractorsComponent>}></Route>
          <Route path="/add-contractor" element={<AddContractorComponent></AddContractorComponent>}></Route>
          <Route path = "/edit-contractor/:id" element={<AddContractorComponent></AddContractorComponent>}></Route>
          <Route path="/register" element={<RegisterContractorComponent></RegisterContractorComponent>}></Route>
           </Routes>
  
      </div>
   
    <FooterComponent></FooterComponent>
    </Router>
    </div>
  );
}

export default App;
