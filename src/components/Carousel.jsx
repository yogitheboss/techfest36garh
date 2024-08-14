import React, { useEffect } from "react";
import collegeImage from "../assets/college.jpg";
import studentImage from "../assets/students.jpg";
const Carousel = () => {
  const [active, setActive] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  let images = [
    { src: collegeImage, alt: "college" },
    { src: studentImage, alt: "student" },
    { src: studentImage, alt: "student" },
  ];
  return (
    <div className="carousel w-80 h-80 relative flex m-8 gap-4 ">
      {images?.map((image, index) => {
        return (
          <div
            className={`image rounded-full ${
              index === active ? "active" : "inactive"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-full w-80 h-80"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
