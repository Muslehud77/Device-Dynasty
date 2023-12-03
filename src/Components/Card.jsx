import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { AuthContext } from '../ContextProvider/AuthContext';
import Rating from "@mui/material/Rating";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button, Tooltip } from '@mui/material';

const Card = ({product,products,setProducts}) => {
    const { dark, goToTop , user } = useContext(AuthContext);
    const {_id, brand, price,  name, rating, photo,productType } =
      product;

      console.log(user);

      const handleDelete = () =>{
        Swal.fire({
          title: `Are you sure you want to delete ${name}?`,
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
        if (user.email === "fardinmohit@gmail.com") {
          if (result.isConfirmed) {
            fetch(
              `https://device-dynasty-server-side.vercel.app/${brand}${_id}`,
              {
                method: "DELETE",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount === 1) {
                  const productsToShow = products.filter((p) => p._id !== _id);
                  setProducts(productsToShow);

                  Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                  );
                }
              });
          }
        } else {
          Swal.fire({
            icon: "error",

            text: "You dont have the authorization!",
          });
        }
        });

     
      }
    
    return (
      <div className="mb-5 ">
        <div className="flex  duration-500 transition-all md:hover:scale-110 ease-in-out flex-col items-center justify-center w-80  mx-auto">
          <div
            className="w-full h-64 bg-gray-300 bg-center  bg-cover  rounded-lg shadow-md"
            style={{ backgroundImage: `url(${photo})` }}
          ></div>

          <div className="w-64 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800">
              {name}
            </h3>
            <div className="flex justify-center">
              <div className="h-[1px] w-28 border"></div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="ml-1">
                <Rating
                  name="half-rating"
                  defaultValue={rating}
                  precision={0.5}
                  size="small"
                />
              </div>
              <div className="flex">
                <div className="text-xs bg-black text-white rounded-md p-[3px] px-2 mb-1 mr-2">
                  {brand}
                </div>
                <div className="text-xs text-black border-2 rounded-md p-[3px] px-2 mb-1 mr-2">
                  {productType}
                </div>
              </div>
            </div>
            <div
              className={`flex items-center justify-between px-3 py-2 
              ${dark ? "bg-gray-700" : "bg-gray-100"} `}
            >
              <span className="font-bold ">${price}</span>
              <div className="flex flex-row-reverse gap-3">
                <Link
                  onClick={goToTop}
                  to={`/details/${brand}${_id}`}
                  className="btn btn-outline p-1 btn-sm border rounded-lg "
                >
                  Details
                </Link>

                <div className="mt-1.5 ">
                  <Link
                    onClick={goToTop}
                    to={`/edit-product/${brand}${_id}`}
                    className="text-xl p-0"
                  >
                    <Tooltip placement="top" title="Edit" variant="outlined">
                      <button>
                        <BiEditAlt />
                      </button>
                    </Tooltip>
                  </Link>
                </div>
                <Tooltip placement="top" title="Delete?" variant="outlined">
                  <button onClick={handleDelete} className="text-xl mt-1">
                    <AiFillDelete />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;