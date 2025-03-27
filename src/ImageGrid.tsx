import React from "react";
import ImageCard from "./Imagecard";
import icon1 from "./assets/icon1.png";

const sizes = [
  
  { width:"w-64", height:"h-72"},
  { width:"w-64", height:"h-64"},
  { width:"w-64", height:"h-72"},
  { width:"w-64", height:"h-64"},
  { width:"w-64", height:"h-60"},
  { width:"w-64", height:"h-72"},
  { width:"w-64", height:"h-60"},
  { width:"w-64", height:"h-64"},
  { width:"w-64", height:"h-72"},
  { width:"w-64", height:"h-64"},
  { width:"w-64", height:"h-60"},
  { width:"w-64", height:"h-72"},
];

const ImageGrid: React.FC = () => {

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
    {sizes.map((size, index) => (
      <ImageCard key={index}
      src={icon1}
       width={size.width} 
       height={size.height} />
    ))}
  </div>
  );
};
export default ImageGrid