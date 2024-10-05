import Image from 'next/image';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import React from 'react';
const Navbar = () => {

  const navLinks = [
    {
      title: 'Home',
      path:  '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
    {
      title: 'Contact',
      path: '/contact',
    }
  ]



    return (
        <div className="bg-slate-100 text-slate-900">
          <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {
        navLinks.map((item, index) => (
          <Link href={item.path} key={item.path}>{item.title}</Link>
        ))
      }
      </ul>
    </div>
    <Link href="/">
    <h3 className="text-3xl font-bold">Car Doctor Pro</h3>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex justify-center items-center gap-6">
    {
        navLinks.map((item, index) => (
          <Link href={item.path} key={item.path}>{item.title}</Link>
        ))
      }
    </ul>
  </div>
  <div className="navbar-end">
      <div className="flex justify-center items-center gap-5">
      <BsHandbag className="text-2xl hover:text-[#FF3811] duration-300"/>
      <CiSearch className="text-2xl  hover:text-[#FF3811] duration-300" />
    <button className="px-6 py-2 rounded-md border-2 border-[#FF3811] text-[#FF3811] capitalize hover:text-white hover:bg-[#FF3811] outline-none duration-300">Appointment</button>
      </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;