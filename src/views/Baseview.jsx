import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Baseview(){

    return(
        <>
        <Navbar
        view1={'Home'} viewlink1={'/home'}
        view2={'About'} viewlink2={'/about'}
        view3={'Services'} viewlink3={'/services'}
        view5={'Contact'} viewlink5={'/contact'}
        />
        <Outlet/>
        <Footer/>
        </> 
    )
    
}

export default Baseview;