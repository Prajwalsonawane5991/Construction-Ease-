
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import FooterComponent from './Components/FooterComponent';

import LayoutComponent from './Components/layout';
import HeaderComponent from './Components/HeaderComponent';
import ImageUpload from './Components/ImageUpload';
import ContractorImage from './Components/ContractorImage';
import ImageUploadMany from './Components/uploadMultiple';
import ParentComponent from './Components/parent';
import ChildComponent from './Components/child';
import SignedInComponent from './Components/SignedInComponent';
// import HomeComponent from './Components/HomeComponent';
import SignUpComponent from './Components/SignUpComponent';
import AboutComponent from './Components/AboutComponent';
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
            <Route path="/Parent" element={<ParentComponent></ParentComponent>}></Route>
            <Route path="/child" element={<ChildComponent message={"shaikh"}></ChildComponent>} />
            <Route path="/signin"element={<SignedInComponent></SignedInComponent>}></Route>
            <Route path="/add-contractor"element={<SignUpComponent></SignUpComponent>}></Route>
            <Route path="/about"element={<AboutComponent></AboutComponent>}></Route>
         </Routes>
        <FooterComponent></FooterComponent>
        </div>
  </div>


  );
}





export default App;
