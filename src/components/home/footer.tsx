import { images } from "../../lib/images";

export default function Footer() {
  return (
    <div className="flex justify-center items-center w-full ">
      <img src={images[12].src} alt={images[12].alt} />
    </div>
  );
}
