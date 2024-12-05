"use client";

import { CategoryAndCard } from "./CategoryAndCard";
import { ShopCard } from "./ShopCard";

const landscapeItems = [
  {
    title: "Landscape",
    items: [
      {
        image: "/assets/images/landscape/landscape-1.jpg",
        price: 199.99,
        name: "Autumn landscape",
      },
      {
        image: "/assets/images/landscape/landscape-3.jpg",
        price: 249.99,
        name: "Mountain landscape",
      },
      {
        image: "/assets/images/landscape/landscape-9.jpg",
        price: 179.99,
        name: "Forest landscape",
      },
      {
        image: "/assets/images/landscape/landscape-10.jpg",
        alt: "Seaside town",
        price: 299.99,
        name: "Mist",
      },
      {
        image: "/assets/images/landscape/landscape-11.jpg",
        price: 229.99,
        name: "Forest",
      },
      {
        image: "/assets/images/landscape/landscape-12.jpg",
        price: 269.99,
        name: "Winter wonderland",
      },
    ],
  },
  {
    title: "Portrait",
    items: [
      {
        image: "/assets/images/potrait/potrait-1.jpg",
        price: 199.99,
        name: "Portrait 1",
      },
      {
        image: "/assets/images/potrait/potrait-2.jpg",
        price: 249.99,
        name: "Portrait 2",
      },
      {
        image: "/assets/images/potrait/potrait-3.jpg",
        price: 179.99,
        name: "Portrait 3",
      },
      {
        image: "/assets/images/potrait/potrait-4.jpg",
        price: 299.99,
        name: "Portrait 4",
      },
      {
        image: "/assets/images/potrait/potrait-5.jpg",
        price: 229.99,
        name: "Portrait 5",
      },
      {
        image: "/assets/images/potrait/potrait-6.jpg",
        price: 269.99,
        name: "Portrait 6",
      },
    ],
  },
  {
    title: "Architecture",
    items: [
      {
        image: "/assets/images/architecture/architecture-1.jpg",
        price: 199.99,
        name: "Old Downtown Home",
      },
      {
        image: "/assets/images/architecture/architecture-2.jpg",
        price: 249.99,
        name: "Gulmarg Church",
      },
      {
        image: "/assets/images/architecture/architecture-3.jpg",
        price: 179.99,
        name: "Gumbad",
      },
      {
        image: "/assets/images/architecture/architecture-4.jpg",
        price: 299.99,
        name: "Downtown Homes",
      },
      {
        image: "/assets/images/architecture/architecture-5.jpg",
        price: 229.99,
        name: "Hazratbal",
      },
      {
        image: "/assets/images/architecture/architecture-6.jpg",
        price: 269.99,
        name: "Shrine ",
      },
    ],
  },
];

export default function Shop() {
  return (
    <div className="flex flex-col w-full pb-[100px]">
      <div className="flex flex-col mt-[100px] sm:mt-[150px] md:mt-[200px] px-4 sm:px-6 md:px-8 lg:px-12 gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h1 className="font-futuraLight text-4xl sm:text-5xl md:text-6xl">
            Shop
          </h1>
          <p className="font-futuraLight text-base lg:text-lg font-extralight">
            Discover stunning photography available for purchase. Browse through
            curated collections, and with just a click, send a direct inquiry to
            the artist to own a piece of art that speaks to you.
          </p>
        </div>
        {landscapeItems.map((item, index) => (
          <CategoryAndCard
            key={index}
            category={item.title}
            items={item.items}
          />
        ))}
      </div>
    </div>
  );
}
