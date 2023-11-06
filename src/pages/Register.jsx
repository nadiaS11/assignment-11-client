import PropTypes from "prop-types";
import HeroForm from "../components/HeroForm";
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
import { updateProfile } from "firebase/auth";
import { auth } from "../auths/firebase.config";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
const Register = () => {
  const navigate = useNavigate();
  const { createUser, googleLogin } = useAuth();
  const myAxios = useAxios();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Login by Google successful.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password, photoUrl);

    if (!/^(?=.*?[!@#$&*~])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast.error(
        "Your Password must have at least 6 characters, one capital letter and one special character."
      );
    }

    try {
      const user = await createUser(email, password);
      const res = await myAxios.post("/auth/access-token", {
        email: user.user.email,
      });
      console.log(res);
      toast.success("Successfully registered.");
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });
      console.log("Profile Updated");
      navigate("/ ");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <HeroForm>
      <Card className="w-full md:w-96 mt-10 lg:mt-20">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center  "
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <form onSubmit={handleSignUp}>
          <CardBody className="flex flex-col gap-4">
            <Input name="name" type="text" label="Full name" size="lg" />
            <Input type="url" name="url" id="url" label="Photo URL" size="lg" />

            <Input name="email" type="email" label="Email" size="lg" />
            <Input name="password" type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
            <Button type="submit" variant="gradient" fullWidth>
              Sign Up
            </Button>
          </CardBody>
        </form>

        <CardFooter className="pt-0">
          <Button onClick={handleGoogleLogin} variant="outlined" fullWidth>
            Sign Up With Google
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Typography
              as="a"
              href="/login"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign In
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </HeroForm>
  );
};

Register.propTypes = {};

export default Register;
