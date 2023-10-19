
import { Outlet } from 'react-router-dom';

import Navbar from '../Pages/Home/Navbar';
//#65C9C0
const Root = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    );
};

export default Root;