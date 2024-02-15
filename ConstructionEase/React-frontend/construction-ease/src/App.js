
import './App.css';
// import './main.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import FooterComponent from './Components/FooterComponent';

import LayoutComponent from './Components/layout';
import HeaderComponent from './Components/HeaderComponent';
import ImageUpload from './Components/ImageUpload';
import ContractorImage from './Components/ContractorImage';
import ImageUploadMany from './Components/uploadMultiple';
import ParentComponent from './Components/ParentComponent';
import ChildComponent from './Components/ChildComponent';
import SignedInComponent from './Components/SignedInComponent';

import SignUpComponent from './Components/SignUpComponent';
import AboutComponent from './Components/AboutComponent';
import AddProjectComponent from './Components/AddProjectComponent';
import Profile from './Components/Profile';
function App() {
  return (
    <div class="page-wrap">
     
      <div className="App">
       <HeaderComponent></HeaderComponent>
       
         <Routes>
            <Route path="/" element={<LayoutComponent></LayoutComponent>}></Route>
            <Route path='/upload' element={<ImageUpload></ImageUpload>}></Route>
            <Route path='/uploadMany' element={<ImageUploadMany></ImageUploadMany>}></Route>
            <Route path='/upload/:id' element={<ContractorImage></ContractorImage>}></Route>
            <Route path="/parent" element={<ParentComponent></ParentComponent>}></Route>
            <Route path="/child" element={<ChildComponent message={"shaikh"}></ChildComponent>}></Route>
            <Route path="/signin"element={<SignedInComponent></SignedInComponent>}></Route>
            <Route path="/add-contractor"element={<SignUpComponent></SignUpComponent>}></Route>
            <Route path="/about" element={<AboutComponent></AboutComponent>}></Route>
            <Route path="/projects" >
              <Route path=":cid" element={<AddProjectComponent></AddProjectComponent>}></Route>
            </Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
         </Routes>
        <FooterComponent></FooterComponent>
        </div>
  </div>


  );
}





export default App;
