import Header from "./component/Header";
import Image from "next/image";
import vandor from "./images/Vector.jpg";
import Border from "./images/Vector.png";
import Shadow from "./images/Group 39.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import VandorBorder from "./images/sec-1border.png";
import {
  FutureProduct,
  PopularCatogory,
  PopularProduct,
} from "./Data/HomePageData";
import Imag1 from "./images/section2/image 10.jpg";
import Imag2 from "./images/section2/image 8.jpg";
import Imag3 from "./images/section2/image 9.jpg";
import Footer from "./component/Footer";

export default function Home() {
  console.log(Border);
  return (
    <>
      {/* <h1 className="text-3xl">hellow sanket</h1> */}
      <Header />

      <section>
        <div className="flex py-5 lg:justify-between md:justify-between justify-center flex-wrap">
          <div className="">
            <div className="">
              <h1 className="text-5xl leading-normal font-semibold">
                Find Your Perfect
              </h1>
              <h1 className="text-5xl leading-normal font-semibold">
                <span className="text-red-800">Blend</span> of Our
              </h1>
              <h1 className="text-5xl leading-normal font-semibold">
                <span className="text-red-800">Traditional</span> and
              </h1>
              <h1 className="text-5xl leading-normal font-semibold">
                Modern <span className="text-red-800">Fashion</span>
              </h1>
            </div>
            <p className="pt-5 pb-3 text-gray-400 lg:md:text-left text-center">
              What are you looking for?
            </p>
            <div className="grid lg:md:grid-cols-3 grid-cols-2 gap-4 my-3 ">
              <button className="px-4 py-2 rounded-full border border-black font-semibold hover:bg-red-800 duration-300 hover:text-white hover:scale-90">
                Bridal Wear
              </button>
              <button className="px-4 py-2 rounded-full border border-black font-semibold hover:bg-red-800 duration-300 hover:text-white hover:scale-90">
                Groom Wear
              </button>
              <button className="px-4 py-2 rounded-full border border-black font-semibold hover:bg-red-800 duration-300 hover:text-white hover:scale-90">
                Family Collection
              </button>
              <button className="px-4 py-2 rounded-full border border-black font-semibold hover:bg-red-800 duration-300 hover:text-white hover:scale-90">
                Festive Outfits
              </button>
              <button className="px-4 py-2 rounded-full border border-black font-semibold hover:bg-red-800 duration-300 hover:text-white hover:scale-90">
                Sangeet Collection
              </button>
              <button className="px-4 py-2 rounded-full border border-black font-semibold hover:bg-red-800 duration-300 hover:text-white hover:scale-90">
                Pooja Outfit
              </button>
              <h1 className="px-3 font-bold">Explore all</h1>
            </div>
          </div>
          <div className="relative group">
            <Image src={vandor} height={100} width={300} alt="simple image" />
            <Image
              src={VandorBorder}
              height={120}
              width={350}
              alt="simple image"
              className="absolute top-6 right-3 group-hover:top-0 group-hover:right-0 duration-200"
            />
          </div>
        </div>
      </section>

      <Image src={Border} width={1300} height={50} alt="img" />

      <section>
        <div className="flex justify-between items-center py-10">
          <h1 className="text-3xl font-bold">Featured Products</h1>
          <div className="flex items-center gap-1 group ">
            <p>
              <a href="" className="group-hover:text-red-500 duration-200">
                View All
              </a>
            </p>
            <FaLongArrowAltRight className="group-hover:text-red-500 duration-200" />
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="flex flex-wrap gap-3 sm:m-auto justify-center">
            {FutureProduct.map((e, ind) => {
              return (
                <div className=" max-w-60 p-3" key={ind}>
                  <Image
                    src={e.img}
                    height={200}
                    width={200}
                    alt="simple image"
                    className="m-auto hover:scale-105 duration-500"
                  />
                  <p className="text-wrap font-semibold py-4">{e.name}</p>
                  <div className="flex justify-between items-center">
                    <p className=" font-semibold ">{e.price}</p>
                    <button className="px-2 py-1 rounded-full border text-xs border-black font-semibold hover:bg-red-800 duration-300 hover:text-white hover:scale-90">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-br from-white to-pink-100 w-full py-5 my-10 ">
          <h1 className="text-2xl font-bold text-center">Popular Categories</h1>
          <div className="grid lg:md:grid-cols-4 grid-cols-1 gap-y-10 gap-x-2 my-10 ">
            {PopularCatogory.map((e, ind) => {
              return (
                <div className="relative group m-auto" key={ind}>
                  <Image
                    src={e.img}
                    width={200}
                    height={200}
                    alt="simple image"
                  />
                  <Image
                    src={Shadow}
                    width={200}
                    alt="simple image"
                    height={200}
                    className="absolute top-0 left-0 hidden group-hover:block duration-200"
                  />
                  <h1 className="text-center absolute bottom-6 left-3 text-white font-bold text-xl  hidden group-hover:block">
                    {e.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center py-10">
          <h1 className="text-3xl font-bold">Popular Products</h1>
          <div className="flex items-center gap-1 group ">
            <p>
              <a href="" className="group-hover:text-red-500 duration-200">
                View All
              </a>
            </p>
            <FaLongArrowAltRight className="group-hover:text-red-500 duration-200" />
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="flex flex-wrap gap-3 sm:m-auto justify-center">
            {PopularProduct.map((e, ind) => {
              return (
                <div className=" max-w-60 p-3" key={ind}>
                  <Image
                    src={e.img}
                    height={200}
                    width={200}
                    className="m-auto hover:scale-105 duration-500"
                    alt="simple img"
                  />
                  <p className="text-wrap font-semibold py-4">{e.name}</p>
                  <div className="flex justify-between items-center">
                    <p className=" font-semibold ">{e.price}</p>
                    <button className="px-2 py-1 rounded-full border text-xs border-black font-semibold hover:bg-red-800 duration-300 hover:text-white hover:scale-90">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="border-2 border-red-800 my-14 py-10">
          <div className="grid lg:md:grid-cols-2 grid-cols-1 my-5 items-center px-10 gap-5">
            <div className="grid lg:md:grid-cols-3 grid-cols-1 items-center">
              <Image
                src={Imag1}
                width={140}
                height={150}
                className="md:lg:mt-0 my-3 mx-auto"
                alt="simple image"
              />
              <Image
                src={Imag2}
                width={140}
                height={150}
                className="md:lg:mt-14 my-3 mx-auto"
                alt="simple image"
              />
              <Image
                src={Imag3}
                width={140}
                height={150}
                className="md:lg:mt-0 my-3 mx-auto"
                alt="simple image"
              />
            </div>
            <div className="">
              <p className="text-gray-400 font-bold">New Arrival</p>
              <p className="text-3xl font-bold py-2">
                Fabulous Blue and Grey Silk Fabric Embroidered Lehenga Choli
              </p>
              <button className="px-6 py-2 rounded-full border text-xl border-black font-semibold hover:bg-red-800 duration-300 hover:text-white hover:scale-90">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
