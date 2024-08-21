import logo from "../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Search, PlusCircle, LogOut, User } from "lucide-react";
import LoginSignupDialog from "./LoginSignupDialog";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
const apiUri = import.meta.env.VITE_REACT_API_URI;

const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.clear("user");
      const response = await axios.get(`${apiUri}/auth/logout`, { withCredentials: true });

      console.log('Logout response:', response);  // Debugging line
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.error('Logout error:', err);  // Debugging line
      if (err.response) {
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
        console.error('Response headers:', err.response.headers);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white mx-auto flex p-3 lg:px-16 items-center justify-end shadow-xl">
      <NavLink to="/" className="inline-flex -order-1 items-center gap-2">
        <h1 className=" font-serif text-2xl text-white hidden sm:block">RideTogether</h1>
        <img
          src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...GGqhZHmRnJwXs1M3EMoAJtlyErhPps9...Q4"
          width={68}
          alt="ShareWheel"
        />
      </NavLink>
      <nav className="ml-auto flex items-center text-base justify-center">
        <NavLink
          to="/search"
          className="flex items-center gap-2 mr-5 hover:text-gray-300 transition-colors duration-300"
        >
          <Search className="h-4 w-4" />
          Search
        </NavLink>
        <NavLink
          to="/offer-seat"
          className="flex items-center gap-2 mr-5 hover:text-gray-300 transition-colors duration-300"
        >
          {" "}
          <PlusCircle className="h-4 w-4" /> Publish a ride
        </NavLink>
      </nav>
      {!user ? (
        <LoginSignupDialog />
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user.user.profilePicture} />
              <AvatarFallback className="select-none text-indigo-600 text-xl font-bold">
                {user.user?.name[0]}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-gray-800 shadow-lg rounded-lg"
          >
            <DropdownMenuLabel className="text-gray-600">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                to="/profile"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition-all duration-200"
              >
                <User className="h-4 w-4 text-indigo-600" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition-all duration-200"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 text-indigo-600" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  );
};

export default Header;
