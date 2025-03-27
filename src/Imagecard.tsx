
    import React from "react";
    import icon1 from "./assets/icon1.png"

    interface ImageCardProps {
      src: string;
      width?: string;
      height?: string;
    }
    
    const ImageCard: React.FC<ImageCardProps> = ({ src, width = "w-64", height = "h-32" }) => {
      return (
        <div className={`bg-[#FF8303] rounded-lg shadow-md flex items-center justify-center ${width} ${height}`}>
          <img src={src} alt="icon" className="opacity-80 object-contain w-full h-full" />
        </div>
      );
    };
    
    export default ImageCard;