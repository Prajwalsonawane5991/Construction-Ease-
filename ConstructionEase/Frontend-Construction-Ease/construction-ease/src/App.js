

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
import SignUpComponent from './Components/SignUpComponent';
import AboutComponent from './Components/AboutComponent';
import AddProjectComponent from './Components/AddProjectComponent';
import Profile from './Components/Profile';
import ExplorePlans from './Components/ExplorePlans';
import DetailedPlanComponent from './Components/DetailedPlan';
import OTPValidation from './Components/OTPValidation';
import SignInComponent from './Components/SignedInComponent';
import OTPValidationClient from './Components/OtpValidationClient';
import SuccessfullyRegister from './Components/SuccessfullyRegister';
import PaymentFormComponent from './Components/PaymentForm';
import Home from './Components/AdminHome';
import SideBarComponent from './Components/SideBarComponent';
import AdminHome from './Components/AdminHome';

import ListContractorsComponent from './Components/ListContractorsComponent';
import ViewContractorFeedbackComponent from './Components/ViewContractorFeedbackComponent'
import ViewClientFeedbackComponent from './Components/ViewClientFeedbackComponent';
import ListClientsComponent from './Components/ListClientsComponent';
import ViewContactComponent from './Components/ViewContactComponent';

import ClientsPaymentListComponent from './Components/ClientPaymentList';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContractorFeedbackComponent from './Components/ContractorFeedback';
import ClientFeedbackComponent from './Components/ClientFeedback';

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
           
            {/* <Route path="/add-contractor"element={<SignUpComponent></SignUpComponent>}></Route> */}
            <Route path="/about" element={<AboutComponent></AboutComponent>}></Route>
            <Route path="/projects" >
              <Route path=":cid" element={<AddProjectComponent></AddProjectComponent>}></Route>
            </Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path="/ExplorePlans/:value" element={<ExplorePlans></ExplorePlans>} />
            <Route path='/details/:id' element={<DetailedPlanComponent></DetailedPlanComponent>} ></Route>


            <Route path="/signup" element={<SignUpComponent></SignUpComponent>}></Route>
            <Route path='/verifyOtp' element={<OTPValidation></OTPValidation>}></Route>
            <Route path='/validateOtp' element={<OTPValidationClient></OTPValidationClient>}></Route>
            <Route path='/signin' element={<SignInComponent></SignInComponent>}></Route>
            {/* <Route path='/contractorpage' element={<ContractorPageComponent></ContractorPageComponent>}></Route> */}
            <Route path="/addproject/:contractorId" element={<AddProjectComponent></AddProjectComponent>} />
           
            <Route path="/SuccessfullyRegister" element={<SuccessfullyRegister></SuccessfullyRegister>} />
            <Route path="/payment/:id" element={<PaymentFormComponent></PaymentFormComponent>}></Route>
            <Route path='/contractorFeedback' element={<ContractorFeedbackComponent></ContractorFeedbackComponent>}></Route>
            <Route path="/clientFeedback/:id" element={<ClientFeedbackComponent></ClientFeedbackComponent>}></Route>




      
            <Route path='/admin' element={<AdminHome></AdminHome>}></Route>
           <Route path='/user' element={<ListClientsComponent></ListClientsComponent>}></Route>
           <Route path='/contractor' element={<ListContractorsComponent></ListContractorsComponent>}></Route>
           <Route path='/contractorfeedbacklist' element={<ViewContractorFeedbackComponent></ViewContractorFeedbackComponent>}></Route>
           <Route path='/clientfeedBacklist' element={<ViewClientFeedbackComponent></ViewClientFeedbackComponent>}></Route>
           <Route path='/cont' element={<ViewContactComponent></ViewContactComponent>}></Route>
           <Route path='/clientPayment' element={<ClientsPaymentListComponent></ClientsPaymentListComponent>}></Route>
         </Routes>
         <FooterComponent style={{ minHeight: "100vh" }} />
        <ToastContainer />
        </div>
  </div>


  );
}





export default App;
