"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logoBlack.png";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const navBarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Studio",
      link: "/studio",
    },
  ];
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky top-0 z-50">
      <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-20" />
        </Link>
        <div className="relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md">
          <input
            type="text"
            placeholder="Search your products here"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <IoCloseOutline
              onClick={() => setSearchQuery("")}
              className="w-5 h-5 hover:text-red-500 duration-200 hover:cursor-pointer"
            />
          ) : (
            <FaSearch className="w-5 h-5 hover:cursor-pointer" />
          )}
        </div>
        <div className="hidden md:inline-flex items-center gap-2">
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-400 duration-200 last:border-r-0 ${
                pathname === item?.link && "text-gray-950 underline"
              }`}
            >
              {item?.title}
            </Link>
          ))}
          {session?.user && (
            <button
              onClick={() => signOut()}
              className="flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-red-600 md:border-r-[2px] border-r-gray-300 duration-200 last:border-r-0"
            >
              Logout
            </button>
          )}
        </div>
        <HiMenuAlt2
          onClick={toggleSideNav}
          className="inline-flex md:hidden cursor-pointer w-8 h-6"
        />
        {/* <div
          onClick={toggleSideNav}
          className="inline-flex md:hidden cursor-pointer w-8 h-6"
        >
          {isSideNavOpen ? (
            <MdClose className="w-8 h-6" />
          ) : (
            <HiMenuAlt2 className="w-8 h-6" />
          )}
        </div> */}
      </nav>
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSideNavOpen ? "translate-x-0" : "translate-x-full"
        } w-64 z-50`}
      >
        <div className="flex flex-col items-center pt-20 relative">
          <MdClose
            onClick={toggleSideNav}
            className="absolute top-8 right-4 w-8 h-6 cursor-pointer text-gray-600"
          />
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className={`w-full py-4 text-center text-gray-600 hover:text-gray-950 ${
                pathname === item?.link && "text-gray-950 font-medium"
              }`}
              onClick={toggleSideNav}
            >
              {item?.title}
            </Link>
          ))}
          {session?.user && (
            <button
              onClick={() => {
                signOut();
                setIsSideNavOpen(false);
              }}
              className="w-full py-4 text-center text-gray-500 hover:text-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
