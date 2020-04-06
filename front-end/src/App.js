import React,{Fragment} from 'react';
import './App.css';
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import SignIn from "./Components/UserManagement/SignIn";
import SignUp from "./Components/UserManagement/SignUp";
import Admin from "./Components/Admin";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <SignIn/>
      <SignUp/>
      <Admin/>
      <Footer/>
    </Fragment>
  );
}

export default App;
