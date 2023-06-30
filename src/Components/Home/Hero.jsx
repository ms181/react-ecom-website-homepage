import { ArrowRight } from "../../assets/Icons";
import Image1 from "../../assets/images/1.jpg";

const Hero = () => {
  return (
    <div className="Hero my-8">
      <div
        className="slide w-full h-[32rem] rounded-2xl flex flex-col gap-8 items-center justify-center bg-neutral-700 bg-blend-overlay bg-cover bg-center px-24"
        style={{ backgroundImage: `url('${Image1}')` }}
      >
        <h1 className="text-white font-bold text-7xl text-center">
          Level up your styles with our summer collections
        </h1>
        <a
          href="#"
          className="outline-none border-none bg-white px-6 py-4 rounded-xl flex gap-2 text-gray-700"
        >
          Shop Now <ArrowRight classNames="stroke-gray-700" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
