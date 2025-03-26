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
  },
  {
    img: images[2].src,
    title: "Express Delivery",
    desc: "Urgent shipping within the same day.",
  },
  {
    img: images[3].src,
    title: "International Delivery",
    desc: "Reliable shipping across the globe.",
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
