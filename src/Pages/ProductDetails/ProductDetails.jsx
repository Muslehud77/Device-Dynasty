import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const product = useLoaderData()
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
      fetch(`http://localhost:5000/${brand}${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            navigate(`/${brand}`)
          }

          console.log(data);
        });
    }
  });
};
    
    return (
      <div>
        <section className="mt-10">
          <img
            src={photo}
            alt=""
            className="w-4/6 mx-auto  -mb-20 rounded-lg shadow-md lg:-mb-40 dark:bg-gray-500"
          />
          <div className="bg-[#65C9C0] bg-opacity-50">
            <div className="container flex flex-col items-center px-4 py-16 pt-24 mx-auto text-center lg:pt-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
              <h1 className="text-5xl font-bold  sm:text-6xl xl:max-w-3xl text-gray-800">
                {name}
              </h1>
              <p className="mt-6 font-serif border p-5 shadow-xl rounded-xl mb-8 text-left text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
                {description}
              </p>
              <div className="overflow-hidden rounded-lg has-shadow w-80 p-4 flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-semibold">{brand}</h3>
                  <div className="ml-1">
                    <Rating
                      name="half-rating"
                      defaultValue={rating}
                      precision={0.5}
                      size="small"
                    />
                  </div>
                </div>
                <div className="flex flex-row-reverse gap-3">
                  <Link
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
              <div className="flex flex-wrap justify-center">
                <Link
                  to={`/${brand}`}
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
                >
                  Back to {brand}
                </Link>
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ProductDetails;