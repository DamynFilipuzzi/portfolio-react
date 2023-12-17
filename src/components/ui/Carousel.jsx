import Chevron from "../../assets/chevron-r.svg";
import { useState, useEffect } from "react";

export default function Carousel({ slides, autoSlideInterval = 3000 }) {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const disableAuto = () => {
    if (autoSlide) {
      setAutoSlide(false);
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

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

      <div className="absolute top-0 h-full w-full justify-between items-center flex">
        <button
          className="h-full bg-slate-600/20 hover:bg-slate-800/50"
          onClick={() => {
            previousSlide();
            disableAuto();
          }}
        >
          <img
            src={Chevron}
            width="30px"
            className="rotate-180 mx-1"
            alt="chevron-left"
          />
        </button>
        <button
          className="h-full bg-slate-600/20 hover:bg-slate-800/50"
          onClick={() => {
            nextSlide();
            disableAuto();
          }}
        >
          <img
            src={Chevron}
            width="30px"
            className="mx-1"
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
                disableAuto();
              }}
              key={"circle" + i}
              className={`rounded-full border-2 border-black/25 w-4 h-4 cursor-pointer ${
                i === current ? "bg-white" : "bg-slate-600/30"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
