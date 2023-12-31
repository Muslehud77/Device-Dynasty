import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete, AiOutlineArrowLeft } from "react-icons/ai";
import Swal from "sweetalert2";
import { useState } from "react";
import bg from '../../Assets/Animated Shape.svg'
import bg2 from '../../Assets/Animated Shape (1).svg'
import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
    const { fetchCart, dark, goToTop } = useContext(AuthContext);

    

    const product = useLoaderData()
    const [showFull,setShowFull] = useState(false)
    const { _id, brand, price, productType, name, rating, photo, description } =
      product[0]

      const navigate = useNavigate()
const handleDelete = () => {
  Swal.fire({
    title: `Are you sure you want to delete ${name}?`,
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://device-dynasty-server-side.vercel.app/${brand}${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            navigate(`/${brand}`)
          }

         
        });
    }
  });
};

const cartProduct = {
  brand,
  price,
  productType,
  name,
  rating,
  photo,
  description,
};

const handleAddToCart = () =>{
  fetch("https://device-dynasty-server-side.vercel.app/cart", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(cartProduct),
  }).then(res=>res.json()).then(data=>{
    toast.success(`${name} added to cart`, {
      style: {
        borderRadius: "10px",
        background: `${dark ? "black" : "white"}`,
        color: `${!dark ? "black" : "white"}`,
      },
    });
   fetchCart()
    
  })
}
    
    return (
      <div
        className={`relative container mx-auto h-full rounded-xl ${
          !dark ? "bg-cyan-800" : "bg-black"
        }  mt-10`}
      >
        <div className="flex z-10 py-10 container mx-auto relative my-10 flex-col-reverse">
          <div
            className={`container ${
              !showFull && "md:h-screen"
            }  transition-all mx-auto px-4 sm:px-6 lg:px-8`}
          >
            <div className=" gap-4 md:gap-8 xl:gap-20 xl:items-center">
              <div className={`flex justify-center`}>
                <img
                  className={`${
                    !showFull &&
                    "left-52 bottom-28 xl:absolute"
                  } duration-1000 transition-all hover:scale-110 ease-in-out w-[600px] mb-10 object-top object-cover h-96 rounded-2xl  overflow-hidden `}
                  src={photo}
                  alt="Image Description"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-full container">
                  <div className="drop-shadow-2xl shadow-xl backdrop-blur-xl backdrop-brightness-75 text-white p-5 rounded-2xl">
                    <h1 className="block text-left text-3xl font-bold  sm:text-4xl lg:text-6xl lg:leading-tight">
                      {brand} <span className="text-[#65C9C0]">{name}</span>
                    </h1>
                  </div>
                  <p className="mt-3  text-white text-lg ">
                    {showFull && (
                      <span>
                        {description}{" "}
                        <button
                          onClick={() => setShowFull(!showFull)}
                          className={`${!showFull && "hidden"} hover:font-bold`}
                        >
                          Read less
                        </button>
                      </span>
                    )}
                    <p>
                      {!showFull && description.slice(0, 200)}
                      <button
                        onClick={() => setShowFull(!showFull)}
                        className={`${showFull && "hidden"} hover:font-bold`}
                      >
                        ...Read more
                      </button>{" "}
                    </p>
                  </p>
                  <div className="flex text-white justify-center md:justify-end my-10">
                    <div className="overflow-hidden border-t rounded-lg has-shadow shadow-2xl  w-96  flex flex-col gap-2">
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold">{name}</h3>
                          <div className="ml-1 flex items-center gap-3">
                            <Rating
                              name="half-rating"
                              defaultValue={rating}
                              precision={0.5}
                              size="small"
                            />
                            <p>{rating}</p>
                          </div>
                        </div>
                        <div className="flex flex-row-reverse gap-3 mt-2">
                          <Link
                            onClick={goToTop}
                            to={`/edit-product/${brand}${_id}`}
                            className="text-xl p-0"
                          >
                            <BiEditAlt />
                          </Link>
                          <button onClick={handleDelete} className="text-xl">
                            <AiFillDelete />
                          </button>
                        </div>
                      </div>
                      <div className="flex bg-gray-700 rounded-tl-2xl">
                        <Link
                          onClick={goToTop}
                          to={`/${brand}`}
                          className="btn rounded-none w-1/2 rounded-tl-xl h-full rounded-bl-none  btn-sm"
                        >
                          <AiOutlineArrowLeft className="text-xl" />
                          Back to {brand}
                        </Link>

                        <button
                          onClick={handleAddToCart}
                          className="btn border-none flex flex-col justify-center items-center rounded-none text-white hover:bg-cyan-600 bg-[#65C9C0] h-full w-1/2 btn-sm"
                        >
                          <BsCart className="text-xl" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 opacity-50 h-full md:h-[100%] w-full z-[-10] object-cover"
            src={dark ? bg2 : bg}
            alt=""
          />
        </div>
      </div>
    );
};

export default ProductDetails;