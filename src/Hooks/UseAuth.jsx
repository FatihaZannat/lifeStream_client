import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const UseAuth = () => {
    const useMyAuth = useContext(AuthContext)
    return useMyAuth
};

export default UseAuth;

// const useMyContext = () => useContext(MyContext);