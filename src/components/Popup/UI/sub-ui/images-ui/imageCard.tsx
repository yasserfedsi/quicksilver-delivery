import React from "react";

interface ImageCardProps {
  src: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src }) => {
  return (
    <div className="bg-primary rounded-lg shadow-md flex items-center justify-center w-64 h-64 overflow-hidden">
      <img
        src={src}
        alt="icon"
        className="opacity-80 object-contain max-w-full max-h-full"
      />
    </div>
  );
};

export default ImageCard;