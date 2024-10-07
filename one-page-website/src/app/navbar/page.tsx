import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col justify-center items-center md:flex-row md:justify-between md:px-5 lg:px-14 lg:py-7 mt-4 ">
        <div className="mt-3">
          <Image
            src="/Images/logo.png"
            alt=""
            width={80}
            height={80}
            className="h-28 w-28 md:h-20 md:w-20"
          />
        </div>

        <div className="mb-5">
          <ul className="gap-4 flex md:gap-11 font-medium text-xl justify-center items-center">
            <Link href="/" className="group relative">
              <li className="group-hover:text-xl text-black font-[600] transition-all duration-300">
                Home
                <span className="block w-full h-[3px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left mt-1"></span>
              </li>
            </Link>
            <Link href="/about" className="group relative">
              <li className="group-hover:text-xl text-black font-[600] transition-all duration-300">
                About
                <span className="block w-full h-[3px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left mt-1"></span>
              </li>
            </Link>
            <Link href="/cards" className="group relative">
              <li className="group-hover:text-xl text-black font-[600] transition-all duration-300">
                Cards
                <span className="block w-full h-[3px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left mt-1"></span>
              </li>
            </Link>
            <Link href="/contact">
              <li>
                <button className="h-11 w-32 md:h-11 text-base md:w-40 mt-3 bg-[#19a821] font-medium md:text-xl text-white rounded-xl hover:scale-105 transition-colors duration-300">
                  Contact Us
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
