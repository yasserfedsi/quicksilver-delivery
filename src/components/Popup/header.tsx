import { X } from "lucide-react"; // Importing an icon from lucide-react

export default function PopupHeader({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full z-10 hover:bg-red-600 transition"
    >
      <X size={24} />
    </button>
  );
}
