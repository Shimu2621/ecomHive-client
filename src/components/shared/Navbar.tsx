import Container from "@/utils/container/Container";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="bg-white">
      <Container>
        <div className="flex items-center justify-between px-10 py-3">
          <div className="navbar-start">
            <div className="dropdown block md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/product">Products</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Logo Container */}
            <div className="text-lg mx-auto gap-0 items-center lg:flex md:flex hidden ">
              <Image
                src="https://cdn.vectorstock.com/i/500p/92/54/shopping-cart-sale-logo-vector-14799254.jpg"
                alt="Shop Logo"
                width={96}
                height={96}
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-3xl italic font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                EcomHive
              </h2>
            </div>
          </div>

          {/* Navbar items */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex justify-center items-center space-x-6 text-center ">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 text-lg font-bold hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-gray-700 text-lg font-bold hover:text-blue-600"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 text-lg font-bold hover:text-blue-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 text-lg font-bold hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex justify-end items-center gap-6">
            <Image
              src="/icons/shopping-cart.png"
              alt="Crat Icon"
              width={30}
              height={30}
            />
            {
              user ? (<UserButton />) : (<Link href="/sign-in" className="bg-blue-400 px-3 py-2 text-black rounded-lg">Sign In</Link>)
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
