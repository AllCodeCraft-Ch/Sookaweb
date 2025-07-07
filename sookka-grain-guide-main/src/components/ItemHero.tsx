
const ItemHero = () => {
  return (
    <section className="pt-32 pb-16 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full text-sm font-semibold text-green-600 mb-4">
          <span>🌟</span>
          <span>Superfood</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-[#8E9775] to-[#B2B09B] bg-clip-text text-transparent mb-4 leading-none tracking-tight">
          Quinoa
        </h1>
        
        <p className="text-xl text-gray-500 mb-8 italic">
          Chenopodium quinoa - The Complete Protein Grain
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-white/70 backdrop-blur-xl border border-[#8E9775]/10 rounded-2xl">
            <span className="text-2xl font-extrabold text-[#8E9775] block">222</span>
            <span className="text-sm text-gray-500 mt-1">Calories/cup</span>
          </div>
          <div className="text-center p-4 bg-white/70 backdrop-blur-xl border border-[#8E9775]/10 rounded-2xl">
            <span className="text-2xl font-extrabold text-[#8E9775] block">8g</span>
            <span className="text-sm text-gray-500 mt-1">Protein</span>
          </div>
          <div className="text-center p-4 bg-white/70 backdrop-blur-xl border border-[#8E9775]/10 rounded-2xl">
            <span className="text-2xl font-extrabold text-[#8E9775] block">5g</span>
            <span className="text-sm text-gray-500 mt-1">Fiber</span>
          </div>
        </div>
      </div>
      
      <div className="relative h-[500px] bg-gradient-to-br from-[#8E9775] to-[#B2B09B] rounded-3xl flex items-center justify-center text-8xl shadow-2xl shadow-[#8E9775]/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-pulse"></div>
        🌾
      </div>
    </section>
  );
};

export default ItemHero;
