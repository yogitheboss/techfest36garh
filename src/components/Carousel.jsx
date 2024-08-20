import React, { useEffect } from "react";
import collegeImage from "../assets/college.jpg";
import studentImage from "../assets/students.jpg";

const Carousel = () => {
  const [active, setActive] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  let images = [
    { src: collegeImage, alt: "college" },
    { src: studentImage, alt: "student" },
    { src: studentImage, alt: "student" },
  ];

  return (
    <div className="carousel w-full max-w-lg h-64 sm:h-60 md:h-80 lg:h-96 relative flex m-8 gap-4 overflow-hidden mb-10 md:mb-20">
      {images?.map((image, index) => {
        return (
          <div
            key={index}
            className={`image transition-opacity duration-1000 ease-in-out absolute inset-0 ${
              index === active ? "active" : "inactive"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
