interface CategoryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  category: any;
}

export default function CategoryPopup({
  isOpen,
  onClose,
  category,
}: CategoryPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex flex-col bg-white z-50 overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-2 z-50"
      >
        ✕
      </button>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          {category.title}
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Category Image */}
          <div className="md:w-1/2 flex justify-center items-center rounded-lg">
            <img
              src={category.img}
              alt={category.title}
              className="w-[95%] h-auto rounded-lg object-contain"
            />
          </div>

          {/* Category Description */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-600">{category.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
