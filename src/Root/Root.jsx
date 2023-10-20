
import { Outlet } from 'react-router-dom';

import Navbar from '../Pages/Home/Navbar';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';
//#65C9C0
const Root = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster position="bottom-right" />
      </div>
    );
};

export default Root;