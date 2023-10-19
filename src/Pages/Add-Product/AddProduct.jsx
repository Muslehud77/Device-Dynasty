import {BiDollar} from "react-icons/bi"

export default function AddProduct() {
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
      name,
      productType,
      brand,
      rating,
      price,
      details,
      photo,
    };
    console.log(product);

    fetch("http://localhost:5000/products",{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(res=>res.json()).then(data=>{
        console.log(data)
    })


  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
     
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Add Product
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600"></p>
      </div>
      <form onSubmit={addProduct} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Product Name
            </label>
            <div className="mt-2.5">
              <input
                // required
                placeholder="Product Name"
                type="text"
                name="productname"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Brand
            </label>
            <select
              name="brand"
              className="select select-bordered w-full max-w-xs mt-1"
            >
              <option disabled selected>
                Brand?
              </option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Google</option>
              <option>Sony</option>
              <option>Microsoft</option>
              <option>DJI</option>
            </select>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Product Type
            </label>
            <select
              name="type"
              className="select select-bordered w-full max-w-xs mt-1"
            >
              <option disabled selected>
                Product?
              </option>
              <option>Phone</option>
              <option>Tablet</option>
              <option>Watch</option>
              <option>Laptop</option>
              <option>Camera</option>
              <option>Drone</option>
            </select>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Rating
            </label>
            <div className=" mt-2.5">
              <input
                defaultValue="4.5"
                // required
                type="number"
                name="rating"
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Price
            </label>
            <div className="relative mt-2.5">
              <input
                placeholder="Price"
                // required
                type="number"
                name="price"
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span className="text-xl right-2 top-2.5 absolute">
                <BiDollar />
              </span>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Photo URL
            </label>
            <div className=" mt-2.5">
              <input
                // required
                placeholder="URL"
                type="photo"
                name="photo"
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Details
            </label>
            <div className="mt-2.5">
              <textarea
                name="details"
                id="details"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
}