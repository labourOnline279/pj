import { ShopCard } from "./ShopCard";

export const CategoryAndCard = ({
  category,
  items,
}: {
  category: string;
  items: { image: string; price: number; name: string }[];
}) => {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 ">
      <h1 className="font-futuraLight text-2xl sm:text-3xl md:text-4xl">
        {category}
      </h1>
      <div className="flex  flex-wrap  w-full  justify-between gap-10  ">
        {items?.map((item, index) => (
          <ShopCard
            key={index}
            image={item.image}
            price={item.price}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};
