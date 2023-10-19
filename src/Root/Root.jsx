
import { Outlet } from 'react-router-dom';

import Navbar from '../Pages/Home/Navbar';
import Footer from '../Components/Footer';
//#65C9C0
const Root = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Root;