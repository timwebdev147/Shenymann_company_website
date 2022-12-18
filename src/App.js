import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Baseview from './views/Baseview';
import Home from './views/Home';
import Services from './views/Services';
import About from './views/About';
import Contact from './views/Contact';
import Project from './views/Project';
import ThankYou from './components/ThankYou';
import NotFound from './components/notFound';

function App() {
  return (
    <HashRouter>
    <Routes>


    <Route path={'*'} element={<NotFound/>}/>
    <Route path={'/'} exact element={<Baseview/>} >
    <Route index path={''} element={<Home/>} ></Route>
    <Route path={'home'} element={<Home/>} ></Route>
    <Route path={'services'} element={<Services/>} ></Route>
    <Route path={'about'} element={<About/>} ></Route>
    <Route path={'contact'} element={<Contact/>} >
      <Route path={'thank_you'} element={<ThankYou/>}></Route>
    </Route>
    {/* <Route path={'project'} element={<Project/>} ></Route> */}
    </Route>

    </Routes>
    </HashRouter>
  );
}

export default App;
