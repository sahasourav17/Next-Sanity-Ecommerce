import Image from "next/image";
import Link from "next/link";
import ErrorImg from "@/assets/errorimg.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen justify-center p-4">
      <Image
        src={ErrorImg}
        alt="page not found"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Oops!</h2>
      <p className="text-lg sm:text-xl md:text-2xl mb-4">
        The page you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Return Home
      </Link>
    </div>
    // <div className="flex flex-col items-center justify-center h-screen text-center">
    //   <div className="max-w-md mx-auto flex flex-col items-center h-screen text-center">
    //     <Image src={ErrorImg} alt="404" className="w-full" />
    //     <h1 className="text-6xl font-bold mb-4">Oops!!!</h1>
    //     <p className="text-2xl mb-4">
    //       The page you are looking for could not be found.
    //     </p>
    //     <Link
    //       href="/"
    //       className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
    //     >
    //       <button>Go Back to Home</button>
    //     </Link>
    //   </div>
    // </div>
  );
}
