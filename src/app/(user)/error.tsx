"use client";
import ErrorImg from "@/assets/errorimg.svg";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center p-4">
      <Image
        src={ErrorImg}
        alt="page not found"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Oops!</h2>
      <p className="text-lg sm:text-xl md:text-2xl mb-4">
        The product you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
