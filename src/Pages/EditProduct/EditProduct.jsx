import { useContext, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { useLoaderData, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../ContextProvider/AuthContext";



export default function EditProduct() {
    const navigate = useNavigate()
  const productToEdit = useLoaderData()
  const { _id, brand, price, productType, name, rating, photo, description } =
    productToEdit[0];
const {dark} = useContext(AuthContext)



  const addProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productname.value;
    const productType = form.type.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const brand = form.brand.value;

    const details = form.details.value;
    const photo = form.photo.value;
    const product = {
        brand,
        productType,
        name,
        price,
      rating,
      photo,
      details,
    };
  

    fetch(`https://device-dynasty-server-side.vercel.app/${brand}${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0){
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Successfully modified ${name}!`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(`/${brand}`)
        }
          
        console.log(data);
      });
  };

     const [pName, setpName] = useState(name);
     const [pType, setpType] = useState(productType);
     const [pBrand, setpBrand] = useState(brand);
     const [pRating, setpRating] = useState(rating);
     const [pDescription, setpDescription] = useState(description);
     const [pPhoto, setpPhoto] = useState(photo);
     const [pPrice, setpPrice] = useState(price);




  const handleChange = (e) =>{
    e.target.name === "productname" && setpName(e.target.value);
    e.target.name === "type" && setpType(e.target.value);
    e.target.name === "brand" && setpBrand(e.target.value);
    e.target.name === "rating" && setpRating(e.target.value);
    e.target.name === "details" && setpDescription(e.target.value);
    e.target.name === "photo" && setpPhoto(e.target.value);
    e.target.name === "price" && setpPrice(e.target.value);
    

    


  }

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-[#65C9C0] from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {name} came for modification
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600"></p>
      </div>
      <div>
        <section className="">
          <div className="container space-y-10 flex flex-col-reverse md:grid gap-6 mx-auto text-center lg:grid-cols-2 justify-center  xl:grid-cols-5">
            <div className="w-full px-6  rounded-md xl:col-span-3 ">
              <form
                onChange={handleChange}
                onSubmit={addProduct}
                className="mx-auto mt-16 max-w-xl sm:mt-20"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold leading-6 ">
                      Product Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        defaultValue={name}
                        placeholder="Product Name"
                        type="text"
                        name="productname"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold leading-6 ">
                      Brand
                    </label>
                    <select
                      defaultValue={brand}
                      name="brand"
                      className={`select select-bordered ${
                        dark && "bg-[#3B3B3B]"
                      }  w-full max-w-xs mt-1 block rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    >
                      <option disabled>Brand?</option>
                      <option>Apple</option>
                      <option>Samsung</option>
                      <option>Google</option>
                      <option>Sony</option>
                      <option>Microsoft</option>
                      <option>DJI</option>
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold leading-6 ">
                      Product Type
                    </label>
                    <select
                      defaultValue={productType}
                      name="type"
                      className={`select select-bordered ${
                        dark && "bg-[#3B3B3B]"
                      }  w-full max-w-xs mt-1 block rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    >
                      <option disabled>Product?</option>
                      <option>Phone</option>
                      <option>Tablet</option>
                      <option>Watch</option>
                      <option>Laptop</option>
                      <option>Camera</option>
                      <option>Drone</option>
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold leading-6 ">
                      Rating
                    </label>
                    <div className=" mt-2.5">
                      <input
                        defaultValue={rating || ''}
                        // required
                        type=""
                        name="rating"
                        className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold leading-6 ">
                      Price
                    </label>
                    <div className="relative mt-2.5">
                      <input
                        defaultValue={price || ''}
                        placeholder="Price"
                        required
                        type="number"
                        name="price"
                        className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <span className="text-xl right-2 top-2.5 absolute">
                        <BiDollar />
                      </span>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold leading-6 ">
                      Photo URL
                    </label>
                    <div className=" mt-2.5">
                      <input
                        required
                        defaultValue={photo}
                        placeholder="URL"
                        type="photo"
                        name="photo"
                        className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold leading-6 ">
                      Details
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        defaultValue={description}
                        name="details"
                        id="details"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
            <div className="col-span-2  ">
              <div className="max-w-2xl mt-16 border overflow-hidden bg-white rounded-lg shadow-md ">
                <img
                  className="object-contain w-full h-64"
                  src={pPhoto}
                  alt={pName}
                />

                <div className="p-6">
                  <div>
                    <span className="text-xs font-medium text-blue-600 uppercase ">
                      {pBrand}
                    </span>
                    <h2 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600">
                      {pName}
                    </h2>
                    <span className="text-xs  text-white bg-black p-1 rounded  uppercase ">
                      {pType}
                    </span>
                    <p className="mt-3 text-sm text-gray-600 ">
                      {pDescription}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <div className="ml-1">
                        <Rating
                          name="half-rating"
                          defaultValue={pRating}
                          precision={0.5}
                          size="small"
                        />
                      </div>
                      <span className="text-base text-white bg-black p-1 rounded font-medium  uppercase ">
                        ${pPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
