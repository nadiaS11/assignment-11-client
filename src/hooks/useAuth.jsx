import { useContext } from "react";

import { AuthContext } from "../auths/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

useAuth.propTypes = {};

export default useAuth;
