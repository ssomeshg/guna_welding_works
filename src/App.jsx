import "./App.css";
import { Link } from "react-router";
import {baseAsset} from "./assets/assets/"
import { FaArrowRight } from "react-icons/fa6";

function App() {
  return (
    <>
      <div className="min-h-screen relative">
        {/* Category Buttons */}
        <div className="container mx-auto pt-10">
          <h1 className="text-white text-lg lg:text-4xl font-bold uppercase">
            Welcome to Guna Welding Works 🔥⚡
          </h1>

          <div className="flex flex-col justify-center items-center mt-5">
            <Link
              to={"/door"}
              className="bg-white p-3 min-w-90 max-w-full rounded-lg hover:bg-amber-300 hover:transition-all flex justify-between items-center"
            >
              <img src={baseAsset.door} alt="" className="w-10" />
              <p className="text-xl font-medium">Safety Doors</p>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
