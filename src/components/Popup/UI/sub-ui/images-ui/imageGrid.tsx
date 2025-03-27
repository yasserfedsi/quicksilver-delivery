import React from "react";
import ImageCard from "./imageCard";
import { images } from "../../../../../lib/images";

// Constants
const SERVICE_IMAGES_COUNT = 12;
const DEFAULT_IMAGE_INDEX = 15;

// Optional: Define specific image indices for each service if they exist
const SERVICE_IMAGE_INDICES = Array.from({ length: SERVICE_IMAGES_COUNT }, (_, i) => 
  DEFAULT_IMAGE_INDEX + i
);

const ImageGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        {SERVICE_IMAGE_INDICES.map((imageIndex, idx) => (
          <ImageCard 
            key={`service-${idx}-${imageIndex}`} 
            src={images[imageIndex]?.src || images[DEFAULT_IMAGE_INDEX].src} 
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;