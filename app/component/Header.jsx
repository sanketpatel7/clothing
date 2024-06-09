import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <>
      <section>
        <div className="flex justify-between py-5">
          <div className="">
            <h1 className="text-xl font-bold ">SANKET&apos;S CLOTHING</h1>
          </div>
          <div className="lg:md:block hidden">
            <ul className="flex gap-5">
              <li>
                <a href="#" className="hover:text-red-500 duration-300">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 duration-300">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 duration-300">
                  Children
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex gap-5">
              <li>
                <CiHeart
                  size={25}
                  className="hover:text-red-500 duration-300 hover:cursor-pointer"
                />
              </li>
              <li>
                <CiUser
                  size={25}
                  className="hover:text-red-500 duration-300 hover:cursor-pointer"
                />
              </li>
              <li>
                <CiShoppingCart
                  size={25}
                  className="hover:text-red-500 duration-300 hover:cursor-pointer"
                />
              </li>
              <li>
                <IoMdMenu size={25} className="lg:md:hidden block" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
