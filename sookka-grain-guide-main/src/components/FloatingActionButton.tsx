
import { Heart } from 'lucide-react';

const FloatingActionButton = () => {
  return (
    <button className="fixed bottom-8 right-8 bg-gradient-to-br from-[#8E9775] to-[#B2B09B] text-white p-4 rounded-full shadow-2xl shadow-[#8E9775]/30 hover:-translate-y-1 hover:scale-110 hover:shadow-3xl hover:shadow-[#8E9775]/40 transition-all duration-300 z-50">
      <Heart size={24} fill="currentColor" />
    </button>
  );
};

export default FloatingActionButton;
