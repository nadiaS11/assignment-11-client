import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/solid";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "Add A Food",
    icon: Cog6ToothIcon,
    link: "/add-a-food",
  },
  {
    label: "My Added Food",
    icon: UserCircleIcon,
    link: "/my-added-food",
  },

  {
    label: "My Orders",
    icon: InboxArrowDownIcon,
    link: "/my-orders",
  },
  //   {
  //     label: "Help",
  //     icon: LifebuoyIcon,
  //   },
  //   {
  //     label: "Sign Out",
  //     icon: PowerIcon,
  //   },
];

function ProfileMenu() {
  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={
              user?.photoURL
                ? user.photoURL
                : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            }
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, link }, key) => {
          return (
            <Link key={key} to={link}>
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded `}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 `,
                  strokeWidth: 2,
                })}
                <Typography
                  variant="small"
                  className="font-normal"
                  color={"inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export function ComplexNavbar() {
  return (
    <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
      <div className="hidden lg:block"></div>

      <ProfileMenu />
    </div>
  );
}
