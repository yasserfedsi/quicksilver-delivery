import { images } from "./images";

export const buttons = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Services",
    link: "#",
  },
  {
    text: "Pricing",
    link: "#",
  },
  {
    text: "Track Order",
    link: "#",
  },
];

export const deliveryOptions = [
  {
    img: images[0].src,
    title: "Same-Day Delivery",
    desc: "Get your packages delivered the same day.",
    className: "w-24 h-24", // Enlarging the first image
  },
  {
    img: images[8].src,
    title: "Express Delivery",
    desc: "Urgent shipping within the same day.",
    className: "w-24 h-24", // Enlarging the second image
  },
  {
    img: images[3].src,
    title: "International Delivery",
    desc: "Reliable shipping across the globe.",
    className: "w-24 h-24", // Keeping the default size for other images
  },
];

export const moreCategories = [
  {
    img: images[2].src,
    title: "Food",
    desc: "Order fresh meals & groceries.",
  },
  {
    img: images[4].src,
    title: "Clothing",
    desc: "Shop the latest fashion trends.",
  },
  {
    img: "",
    title: "Find More",
    desc: "Discover more services.",
  },
];
