import { Package, Truck, MapPin, CheckCircle } from "lucide-react";
import { images } from "./images";

export const buttons = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Services",
    link: "#categories",
  },
  {
    text: "Pricing",
    link: "#pricing",
  },
  {
    text: "Track Order",
    link: "#track",
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
    img: images[15].src,
    title: "Find More",
    desc: "Discover more services.",
  },
];

export const steps = [
  {
    id: 1,
    label: "Order Confirmed",
    icon: Package,
  },
  {
    id: 2,
    label: "Picked by Courier",
    icon: Truck,
  },
  {
    id: 3,
    label: "On the Way",
    icon: MapPin,
  },
  {
    id: 4,
    label: "Ready for Pickup",
    icon: CheckCircle,
  },
];

export const plans = [
  {
    title: "Basic Plan",
    description: "Local delivery, up to 5 packages",
    price: "$10",
    per: "month",
  },
  {
    title: "Standard Plan",
    description: "Express delivery, up to 20 packages",
    price: "$25",
    per: "month",
  },
  {
    title: "Premium Plan",
    description: "International delivery, unlimited packages",
    price: "$50",
    per: "month",
  },
];
