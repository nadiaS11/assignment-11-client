import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Avatar,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ComplexNavbar } from "../routes/Complex";

function StickyNavbar() {
  const { user, signOutUser } = useAuth();
  console.log(user);
  const handleSignOut = async () => {
    await signOutUser();
    console.log("successfully signed out", user);
  };
  const [openNav, setOpenNav] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/menu" className="flex items-center">
          Menu
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/blog" className="flex items-center">
          Blog
        </a>
      </Typography>
      {user?.email && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="/profile" className="flex items-center">
            My Profile
          </a>
        </Typography>
      )}
    </ul>
  );

  return (
    <div className=" max-h-[768px]  ">
      <Navbar className=" w-[95%] fixed top-5  bg-[#f8f6c5] left-[50%] -translate-x-2/4  z-[999] h-max max-w-full rounded-xl px-4 py-2 lg:px-8 lg:py-4 shadow-md">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center justify-between text-blue-gray-900">
            <img className="w-12" src="./namkeen-favicon-black.png" alt="" />
            <Typography
              as="a"
              href="/"
              className="ml-4 cursor-pointer py-1.5 font-bold text-2xl"
            >
              N A A M K E E N
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1 ">
              {!user && (
                <>
                  <Link to={"/login"}>
                    <Button
                      variant="outlined"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <Link to={"/register"}>
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
            {user?.email && (
              <>
                <ComplexNavbar></ComplexNavbar>
                <Link to={"/login"} className=" ">
                  <Button onClick={handleSignOut} variant="outlined" size="sm">
                    <span>Sign Out</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {!user && (
              <>
                <Link to={"/login"} className="w-full">
                  <Button fullWidth variant="outlined" size="sm" className="">
                    <span>Sign In</span>
                  </Button>
                </Link>
                <Link to={"/register"} className="w-full">
                  <Button fullWidth variant="gradient" size="sm" className="">
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

StickyNavbar.propTypes = {};

export default StickyNavbar;
