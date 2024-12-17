import { useState, useEffect } from "react";

import girlOnLaptop from "../../../assets/pages/home/hero/a-girl-on-a-laptop-min.webp";

export default function HeroImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = girlOnLaptop;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
    >
      <div
        className="w-full h-full bg-cover lg:bg-right-bottom bg-center bg-fixed"
        style={{
          backgroundImage: `url(${girlOnLaptop})`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
