import React from 'react';
import { BiSupport } from 'react-icons/bi';
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
import { RiSecurePaymentFill } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdRateReview } from "react-icons/md";
import { TbShoppingCartDiscount } from "react-icons/tb";


const Services = () => {
    return (
      <div>
        <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex justify-center items-center flex-col mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-5xl font-bold">
              Available 24/7, we're here for you, always.
            </h2>
            <p className="dark:text-gray-400 uppercase">Device Dynasty</p>
            <div className='w-20 bg-black h-[1px]'></div>
          </div>
          <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
              <BsFillMenuButtonWideFill className="text-3xl" />
              <h3 className="my-3 text-3xl font-semibold">
                Wide Product Range
              </h3>
              <div className="space-y-1 leadi">
                <p>Diverse Selection</p>
                <p>Latest Models</p>
                <p>Accessories Galore</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <RiSecurePaymentFill className="text-3xl" />
              <h3 className="my-3 text-3xl font-semibold">
                Secure Shopping Experience
              </h3>
              <div className="space-y-1 leadi">
                <p>Safe Transactions</p>
                <p>Data Protection</p>
                <p>Encrypted Checkout</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <BiSupport className="text-3xl" />
              <h3 className="my-3 text-3xl font-semibold">
                Expert Customer Support
              </h3>
              <div className="space-y-1 leadi">
                <p>Knowledgeable Assistance</p>
                <p>Product Guidance</p>
                <p>Technical Assistance</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <LiaShippingFastSolid className="text-3xl" />
              <h3 className="my-3 text-3xl font-semibold">
                Fast Shipping and Delivery
              </h3>
              <div className="space-y-1 leadi">
                <p>Quick Turnaround</p>
                <p>Reliable Couriers</p>
                <p>Order Tracking</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <MdRateReview className="text-3xl" />
              <h3 className="my-3 text-3xl font-semibold">
                Product Reviews and Ratings
              </h3>
              <div className="space-y-1 leadi">
                <p>Informed Decisions</p>
                <p>Real Feedback</p>
                <p>Star Ratings</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <TbShoppingCartDiscount className="text-3xl" />
              <h3 className="my-3 text-3xl font-semibold">
                Promotions and Discounts
              </h3>
              <div className="space-y-1 leadi">
                <p>Special Offers</p>
                <p>Loyalty Programs</p>
                <p>Seasonal Sales</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Services;