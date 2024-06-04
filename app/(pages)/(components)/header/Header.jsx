"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white ">
      <div className="max-w-[100%] shadow-md h-16 sm:h-20 flex justify-between px-3 md:justify-evenly items-center">
        <div className="flex gap-1">
          <p className="md:text-[42px] text-[35px] font-bold tracking-tighter">
            Selling <span className="text-red-600">.</span>
          </p>
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500  transition duration-500  font-normal"
          >
            Home
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
          >
            Products
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
          >
            About Us
          </Link>
          <Link
            to="summer-sale"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
          >
            Special
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
          >
            Testimonials
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
          >
            Blog
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-[30px]">
            <FaBars />
          </button>
        </div>
      </div>

      <div
        className={`fixed z-20 top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button onClick={toggleSidebar} className="p-4 text-2xl">
          &times;
        </button>
        <div className="flex flex-col gap-5 p-5">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
            onClick={toggleSidebar}
          >
            Products
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
            onClick={toggleSidebar}
          >
            About Us
          </Link>
          <Link
            to="special"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
            onClick={toggleSidebar}
          >
            Special
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
            onClick={toggleSidebar}
          >
            Testimonials
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
            onClick={toggleSidebar}
          >
            Blog
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
