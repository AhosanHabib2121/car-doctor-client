import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
          <>
            <div className=" text-center my-5">
              <progress className="progress w-56"></progress>
            </div>
          </>
        );
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to='/login'>Login</Navigate>
};

export default PrivateRoutes;
