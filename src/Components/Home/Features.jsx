import { Card, Smile, Shopping, Shipping } from "../../assets/Icons";

const Features = () => {
  return (
    <div className="Features flex flex-col gap-12 py-12">
      <div className="top flex justify-between items-center">
        <h1 className="text-gray-900 font-bold text-3xl">
          We provide best <br /> customer experience
        </h1>
        <div className="h-full flex items-center gap-12 text-gray-500">
          <div className="w-1 h-24 bg-gray-800"></div>
          We ensure our customers have the best shopping experience
        </div>
      </div>
      <div className="main flex gap-8 items-stretch">
        <div className="card w-1/4 h-auto">
          <span className="w-16 h-16 bg-gray-200 rounded-xl grid place-items-center">
            <Card classNames="stroke-gray-800 w-5" />
          </span>
          <h3 className="text-xl text-gray-900 font-extrabold my-4">
            Original products
          </h3>
          <p className="text-gray-600 text-sm">
            We provide money back guarantee if the products are not original
          </p>
        </div>
        <div className="card w-1/4 h-auto">
          <span className="w-16 h-16 bg-gray-200 rounded-xl grid place-items-center">
            <Smile classNames="stroke-gray-800 w-5" />
          </span>
          <h3 className="text-xl text-gray-900 font-extrabold my-4">
            Satisfaction Guarantee
          </h3>
          <p className="text-gray-600 text-sm">
            Exchange the product you've purchased if it doesn't fit you
          </p>
        </div>
        <div className="card w-1/4 h-auto">
          <span className="w-16 h-16 bg-gray-200 rounded-xl grid place-items-center">
            <Shopping classNames="stroke-gray-800 w-5" />
          </span>
          <h3 className="text-xl text-gray-900 font-extrabold my-4">
            New Arrival Everyday
          </h3>
          <p className="text-gray-600 text-sm">
            We update our collection everyday
          </p>
        </div>
        <div className="card w-1/4 h-auto">
          <span className="w-16 h-16 bg-gray-200 rounded-xl grid place-items-center">
            <Shipping classNames="stroke-gray-800 w-5" />
          </span>
          <h3 className="text-xl text-gray-900 font-extrabold my-4">
            Fast & Free Shipping
          </h3>
          <p className="text-gray-600 text-sm">
            We offer fast and free shipping for our loyal customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
