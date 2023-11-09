import axios from "axios";
import { signOut } from "firebase/auth";
import useAuth from "./useAuth";
import { auth } from "../auths/firebase.config";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  //   const { signOutUser } = useAuth();
  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        // signOutUser();
        // signOut(auth);
      }

      //   return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxios;
