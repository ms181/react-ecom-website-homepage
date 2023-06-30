import { Cart } from "../../assets/Icons";
import Image1 from "../../assets/images/featured/1.jpg";
import Image2 from "../../assets/images/featured/2.jpg";
import Image3 from "../../assets/images/featured/3.jpg";
import Image4 from "../../assets/images/featured/4.jpg";
import Image5 from "../../assets/images/featured/5.jpg";
import Image6 from "../../assets/images/featured/6.jpg";
import Image7 from "../../assets/images/featured/7.jpg";
import Image8 from "../../assets/images/featured/8.jpg";

const Featured = () => {
  return (
    <div className="Featured">
      <div className="categories flex flex-col gap-12 py-12">
        <h1 className="text-gray-900 font-bold text-3xl">Featured</h1>
        <div className="cards flex gap-8 items-stretch">
          <div className="card w-1/4 h-auto">
            <img
              src={Image1}
              alt=""
              className="object-cover object-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]"
            />
            <div className="flex justify-between items-start py-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-gray-700 font-extrabold">
                  Autumn Dress
                </h3>
                <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
                  $69 <del className="text-sm text-gray-400">$99</del>
                </h2>
              </div>
              <span className="w-12 h-12 bg-slate-900 rounded-xl grid place-items-center">
                <Cart classNames="stroke-white w-4 -ml-0.5" />
              </span>
            </div>
          </div>
          <div className="card w-1/4 h-auto">
            <img
              src={Image2}
              alt=""
              className="object-cover object-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]"
            />
            <div className="flex justify-between items-start py-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-gray-700 font-extrabold">
                  Denim Jacket
                </h3>
                <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
                  $109 <del className="text-sm text-gray-400">$129</del>
                </h2>
              </div>
              <span className="w-12 h-12 bg-slate-900 rounded-xl grid place-items-center">
                <Cart classNames="stroke-white w-4 -ml-0.5" />
              </span>
            </div>
          </div>
          <div className="card w-1/4 h-auto">
            <img
              src={Image3}
              alt=""
              className="object-cover object-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]"
            />
            <div className="flex justify-between items-start py-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-gray-700 font-extrabold">
                  Blue Coat
                </h3>
                <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
                  $499 <del className="text-sm text-gray-400">$599</del>
                </h2>
              </div>
              <span className="w-12 h-12 bg-slate-900 rounded-xl grid place-items-center">
                <Cart classNames="stroke-white w-4 -ml-0.5" />
              </span>
            </div>
          </div>
          <div className="card w-1/4 h-auto">
            <img
              src={Image4}
              alt=""
              className="object-cover object-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]"
            />
            <div className="flex justify-between items-start py-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-gray-700 font-extrabold">
                  Mustard Top
                </h3>
                <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
                  $49 <del className="text-sm text-gray-400">$69</del>
                </h2>
              </div>
              <span className="w-12 h-12 bg-slate-900 rounded-xl grid place-items-center">
                <Cart classNames="stroke-white w-4 -ml-0.5" />
              </span>
            </div>
          </div>
        </div>
        <div className="cards flex gap-8 items-stretch">
          <div className="card w-1/4 h-auto">
            <img
              src={Image5}
              alt=""
              className="object-cover object-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]"
            />
            <div className="flex justify-between items-start py-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-gray-700 font-extrabold">
                  Pink Jacket
                </h3>
                <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
                  $99 <del className="text-sm text-gray-400">$139</del>
                </h2>
              </div>
              <span className="w-12 h-12 bg-slate-900 rounded-xl grid place-items-center">
                <Cart classNames="stroke-white w-4 -ml-0.5" />
              </span>
            </div>
          </div>
          <div className="card w-1/4 h-auto">
            <img
              src={Image6}
              alt=""
              className="object-cover object-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]"
            />
            <div className="flex justify-between items-start py-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-gray-700 font-extrabold">
                  Brown Coat
                </h3>
                <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
                  $299 <del className="text-sm text-gray-400">$359</del>
                </h2>
              </div>
              <span className="w-12 h-12 bg-slate-900 rounded-xl grid place-items-center">
                <Cart classNames="stroke-white w-4 -ml-0.5" />
              </span>
            </div>
          </div>
          <div className="card w-1/4 h-auto">
            <img
              src={Image7}
              alt=""
              className="object-cover object-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]"
            />
            <div className="flex justify-between items-start py-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-gray-700 font-extrabold">
                  Maroon T-Shirt
                </h3>
                <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
                  $29 <del className="text-sm text-gray-400">$39</del>
                </h2>
              </div>
              <span className="w-12 h-12 bg-slate-900 rounded-xl grid place-items-center">
                <Cart classNames="stroke-white w-4 -ml-0.5" />
              </span>
            </div>
          </div>
          <div className="card w-1/4 h-auto">
            <img
              src={Image8}
              alt=""
              className="object-cover object-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]"
            />
            <div className="flex justify-between items-start py-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-gray-700 font-extrabold">
                  Gray Shirt
                </h3>
                <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
                  $89 <del className="text-sm text-gray-400">$109</del>
                </h2>
              </div>
              <span className="w-12 h-12 bg-slate-900 rounded-xl grid place-items-center">
                <Cart classNames="stroke-white w-4 -ml-0.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
