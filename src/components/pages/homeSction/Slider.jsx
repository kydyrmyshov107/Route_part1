import scss from "./Slider.module.scss";
import { useKeenSlider } from "keen-slider/react";

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 700px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <>
      <section className={scss.Slider}>
        <div className="container">
          <div className={scss.content}>
            <div ref={sliderRef} className="keen-slider">
              {sliderData.map((item, index) => (
                <div key={index} className="keen-slider__slide number-slide1">
                  <img className={scss.img} src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
