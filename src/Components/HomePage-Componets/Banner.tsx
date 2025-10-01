import { useEffect, useRef } from "react";
import dish from "../../Images/image-from-rawpixel-id-15319459-png.png";
import { Link } from "react-router-dom";
import { animate, type DOMKeyframesDefinition } from "framer-motion";

function Banner() {
  const dishRef = useRef<HTMLDivElement>(null);
  const slogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    runAnimations();
  }, []);

  const runAnimations = () => {
    if (dishRef.current) {
      const dishKeyframes: DOMKeyframesDefinition = {
        opacity: [0, 1],
        scale: [0.95, 1],
        y: [20, 0],
      };

      animate(dishRef.current, dishKeyframes, {
        duration: 1.2,
        delay: 1,
        ease: "easeOut", // ✅ use ease instead of easing for TS safety
      });
    }

    if (slogRef.current) {
      const slogKeyframes: DOMKeyframesDefinition = {
        opacity: [0, 1],
        scale: [0.8, 1],
        x: [-20, 0],
      };

      animate(slogRef.current, slogKeyframes, {
        duration: 1.4,
        delay: 0.5,
        ease: "easeInOut", // ✅ same fix
      });
    }
  };

  return (
    <div className="relative w-full h-screen bg-white/40 flex items-center justify-center text-center px-4">
      <div className="text-5xl font-bold text-black/80 flex flex-col gap-y-6">
        <div>
          Welcome to the <span className="text-orange-500">MealMaster</span>
        </div>
        <div
          ref={slogRef}
          className="text-2xl font-semibold text-gray-700"
        >
          Discover, Cook, and Savor Every Bite.
        </div>
        <Link to="/all-meals">
          <button className="bg-white text-orange-500 px-6 py-2 text-lg rounded-xl ring-1 ring-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
            Explore Recipes
          </button>
        </Link>
      </div>

      <div
        ref={dishRef}
        className="absolute bottom-6 right-6 w-32 sm:w-40 md:w-48 lg:w-56"
      >
        <img src={dish} alt="Delicious Dish" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Banner;
