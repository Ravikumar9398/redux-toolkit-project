import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./banner.css";

export const Banners = () => {
  return (
    <Carousel autoPlay dynamicHeight infiniteLoop centerMode>
      <div>
        <img src="/images/img1.webp" alt="banner1" />
      </div>
      <div>
        <img src="/images/img2.webp" alt="banner2" />
      </div>
      <div>
        <img src="/images/img3.webp" alt="banner3" />
      </div>
    </Carousel>
  );
};
