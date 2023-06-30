import { Close } from "../../assets/Icons";

const TopBar = () => {
  return (
    <div className="top sticky top-0 bg-gray-800 text-white flex items-center justify-between py-2 px-24">
      <p></p>
      <p className="text-sm text-gray-300">
        Sign up and <b className="text-white font-semibold">GET 20% OFF</b> on
        your first order{" "}
        <a href="#" className="font-semibold text-white underline">
          Sign Up Now
        </a>
      </p>
      <a href="">
        <Close classNames="w-5 " />
      </a>
    </div>
  );
};

export default TopBar;
