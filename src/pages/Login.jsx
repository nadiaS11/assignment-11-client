import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import HeroForm from "../components/HeroForm";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const Login = () => {
  const myAxios = useAxios();
  const { signInUser, googleLogin } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return toast.error("Enter a valid email address.");
    }
    if (!/^(?=.*?[!@#$&*~])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast.error("Password invalid.");
    }

    const toastId = toast.loading("Logging...");
    try {
      const user = await signInUser(email, password);
      const res = await myAxios.post("/auth/access-token", {
        email: user.user.email,
      });

      console.log(res);
      toast.success("Login successful.", { id: toastId });
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const googleUser = await googleLogin();

      toast.success("Login by Google successful.");
      // const userInfo = await myAxios.post("/users", {
      //   name: googleUser.user.displayName,
      //   email: googleUser.user.email,
      //   photoUrl: googleUser.user.photoURL,
      // });
      // console.log(userInfo);

      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
  return (
    <HeroForm>
      <Card className=" w-full md:w-96 mt-10 lg:mt-28">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center  "
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleSignIn}>
          <CardBody className="flex flex-col gap-4">
            <Input name="email" type="email" label="Email" size="lg" />
            <Input name="password" type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
            <Button type="submit" variant="gradient" fullWidth>
              Sign In
            </Button>
          </CardBody>
        </form>

        <CardFooter className="pt-0">
          <Button onClick={handleGoogleLogin} variant="gradient" fullWidth>
            Sign In With Google
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="/register"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </HeroForm>
  );
};

Login.propTypes = {};

export default Login;
