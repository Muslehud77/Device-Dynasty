import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContext";
import { Navigate } from "react-router-dom";


const PrivateRouteForLoginSignUp = ({children}) => {
const {user,loading} = useContext(AuthContext)

    if(!user){
        return children
    }

    if(loading){
        return (
          <>
            <div className="absolute top-0 place-items-stretch h-screen w-full">
              <div className="skeleton wave info" />
            </div>
          </>
        );
    }

    return <Navigate to={"/"}></Navigate>;
};

export default PrivateRouteForLoginSignUp;