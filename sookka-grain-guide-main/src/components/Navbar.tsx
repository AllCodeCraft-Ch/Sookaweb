
import { Search, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F6F5F3]/80 backdrop-blur-xl border-b border-[#8E9775]/10 z-50 py-4">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-3xl font-extrabold bg-gradient-to-r from-[#8E9775] to-[#6B7353] bg-clip-text text-transparent tracking-tight"
        >
          Sookka
        </Link>
        
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="text-[#8E9775] hover:text-[#6B7353] transition-colors">Home</Link>
          <span>›</span>
          <Link to="/" className="text-[#8E9775] hover:text-[#6B7353] transition-colors">Grains</Link>
          <span>›</span>
          <span>Quinoa</span>
        </div>
        
        <div className="flex gap-4 items-center">
          <button className="bg-[#8E9775]/10 border border-[#8E9775]/20 p-3 rounded-xl text-[#8E9775] hover:bg-[#8E9775]/20 hover:-translate-y-1 transition-all duration-300">
            <Search size={18} />
          </button>
          <button className="bg-[#8E9775]/10 border border-[#8E9775]/20 p-3 rounded-xl text-[#8E9775] hover:bg-[#8E9775]/20 hover:-translate-y-1 transition-all duration-300">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
