import Chevron from "../../assets/chevron-r.svg";
import { useState } from "react";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  let nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, i) => {
          return <img key={i} src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex px-1">
        <button onClick={previousSlide}>
          <img
            src={Chevron}
            width="30px"
            className="rotate-180 bg-indigo-500/60 hover:bg-indigo-500 rounded-full"
            alt="chevron-left"
          />
        </button>
        <button onClick={nextSlide}>
          <img
            src={Chevron}
            width="30px"
            className="bg-indigo-500/60 hover:bg-indigo-500 rounded-full"
            alt="chevron-right"
          />
        </button>
      </div>

      <div className="absolute bottom-0 py-2 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 cursor-pointer ${
                i === current ? "bg-indigo-500" : "bg-indigo-500/50"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
