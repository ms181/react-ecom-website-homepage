import Men from "../../assets/images/categories/men.png";
import Women from "../../assets/images/categories/women.png";
import Kids from "../../assets/images/categories/kids.png";
import Casual from "../../assets/images/categories/casual.jpg";
import { ArrowRight } from "../../assets/Icons";

const Categories = () => {
  return (
    <div className="categories flex flex-col gap-12 py-12">
      <h1 className="text-gray-900 font-bold text-3xl">Categories</h1>
      <div className="cards flex gap-8 items-stretch">
        <div
          className="card w-1/4 h-auto aspect-square bg-cover bg-center rounded-2xl flex justify-center items-end pb-6 px-6 bg-neutral-600 bg-blend-overlay"
          style={{ backgroundImage: `url('${Men}')` }}
        >
          <a
            href="#"
            className="outline-none border-none bg-white w-full flex justify-center items-center py-4 rounded-xl gap-2 text-gray-700"
          >
            Shop Men <ArrowRight classNames="stroke-gray-700" />
          </a>
        </div>
        <div
          className="card w-1/4 h-auto aspect-square bg-cover bg-center rounded-2xl flex justify-center items-end pb-6 px-6 bg-neutral-600 bg-blend-overlay"
          style={{ backgroundImage: `url('${Women}')` }}
        >
          <a
            href="#"
            className="outline-none border-none bg-white w-full flex justify-center items-center py-4 rounded-xl gap-2 text-gray-700"
          >
            Shop Women <ArrowRight classNames="stroke-gray-700" />
          </a>
        </div>
        <div
          className="card w-1/4 h-auto aspect-square bg-cover bg-center rounded-2xl flex justify-center items-end pb-6 px-6 bg-neutral-600 bg-blend-overlay"
          style={{ backgroundImage: `url('${Kids}')` }}
        >
          <a
            href="#"
            className="outline-none border-none bg-white w-full flex justify-center items-center py-4 rounded-xl gap-2 text-gray-700"
          >
            Shop Kids <ArrowRight classNames="stroke-gray-700" />
          </a>
        </div>
        <div
          className="card w-1/4 h-auto aspect-square bg-cover bg-center rounded-2xl flex justify-center items-end pb-6 px-6 bg-neutral-600 bg-blend-overlay"
          style={{ backgroundImage: `url('${Casual}')` }}
        >
          <a
            href="#"
            className="outline-none border-none bg-white w-full flex justify-center items-center py-4 rounded-xl gap-2 text-gray-700"
          >
            Shop Casual <ArrowRight classNames="stroke-gray-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
