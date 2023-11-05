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
const Register = () => {
  const navigate = useNavigate();
  const { createUser, googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        alert("Login by Google successful.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    if (!/^(?=.*?[!@#$&*~])(?=.*[A-Z]).{6,}$/.test(password)) {
      return alert(
        "Your Password must have at least 6 characters, one capital letter and one special character."
      );
    }

    createUser(email, password)
      .then((result) => {
        // result.user.displayName = name;
        console.log(result.user);

        alert("Successfully registered.");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            // Profile updated!
            // ...
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
        navigate("/ ");
      })
      .catch((err) => {
        console.log(err);
      });
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
        <form>
          <CardBody className="flex flex-col gap-4">
            <Input name="name" type="text" label="Full name" size="lg" />
            <Input name="photo" type="url" label="Photo URL" size="lg" />

            <Input name="email" type="email" label="Email" size="lg" />
            <Input name="password" type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
            <Button
              onClick={handleSignUp}
              type="submit"
              variant="gradient"
              fullWidth
            >
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
