import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import celebration from '../Assets/celebration.gif'
import CartCard from "./CartCard";
import {FaShoppingCart} from 'react-icons/fa'
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContext";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";




export default function Cart() {
    const { cart,  fetchCart,dark} = useContext(AuthContext);
  const [state, setState] = React.useState({
   
    right: false,
  });



  const amount = cart.reduce((base, c) => {
    return base + parseFloat(c.price);
  }, 0);



 
  const toggleDrawer = (anchor, open) => (event) => {
    
    if (
     event.type === "keydown"  &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
        
      return;
    }
   
    setState({ ...state, [anchor]: open });
  };

  
 
const handleCheckOut = () => {
  fetch("https://device-dynasty-server-side.vercel.app/cart", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount > 0) {
        fetchCart();
    setState({
      right: false,
    });
        Swal.fire({
          title:
            "Thank you for choosing Device Dynasty for your Device Needs!  ",
          imageUrl: `${celebration}`,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          showConfirmButton: false,
          timer: 1500,
        });
        
      } 
    
    });

};




  const list = () => (
    <Box>
      <div
        className={`flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ${
          dark && "bg-gray-900 text-gray-100"
        }`}
      >
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.length > 0 &&
            cart.map((c, idx) => <CartCard key={idx} c={c}></CartCard>)}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">${amount}</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() =>
              setState({
                right: false,
              })
            }
            type="button"
            className="px-6 py-2 flex justify-center items-center gap-2 border rounded-md dark:border-violet-400"
          >
            <p>Back to shop</p> <AiOutlineArrowRight />
          </button>
          {cart.length > 0 && (
            <button
              onClick={() => handleCheckOut()}
              type="button"
              className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
            >
              <span className="sr-only sm:not-sr-only">Continue to</span>
              Checkout
            </button>
          )}
        </div>
      </div>
    </Box>
  );

  return (
    <div  >
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={() => {fetchCart()}} className="relative">
            <button className="text-2xl" onClick={toggleDrawer(anchor, true)}>
              <FaShoppingCart />
            </button>
            {cart.length > 0 && (
              <span className="font-bold left-5 bottom-5 text-xs absolute text-white px-1 bg-red-500 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
