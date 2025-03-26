import { moreCategories } from "../../lib/utils";

export default function Categories({ onClose }: { onClose: () => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {moreCategories.map((category, index) => (
        <div
          key={index}
          className="p-6 border-4 border-primary rounded-lg text-center flex flex-col items-center bg-white shadow-md uppercase text-primary"
        >
          <img
            src={category.img}
            alt={category.title}
            onClick={onClose}
            className="w-18 h-16 mb-2 cursor-pointer"
          />
          <p className="text-2xl font-bold">{category.title}</p>
          <p className="mt-2 text-gray-600">{category.desc}</p>
        </div>
      ))}
    </div>
  );
}
