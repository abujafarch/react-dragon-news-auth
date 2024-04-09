import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate,  useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)


    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user) {
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoutes;