export default function PopupHeader({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg z-10"
    >
      Close
    </button>
  );
}
