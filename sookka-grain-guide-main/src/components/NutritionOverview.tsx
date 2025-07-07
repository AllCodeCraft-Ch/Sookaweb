
const NutritionOverview = () => {
  const nutritionFacts = [
    { name: 'Protein', value: '8.1g' },
    { name: 'Carbohydrates', value: '39.4g' },
    { name: 'Dietary Fiber', value: '5.2g' },
    { name: 'Total Fat', value: '3.6g' },
    { name: 'Iron', value: '2.8mg' },
    { name: 'Magnesium', value: '118mg' },
    { name: 'Phosphorus', value: '281mg' },
    { name: 'Folate', value: '78mcg' },
  ];

  return (
    <div className="grid md:grid-cols-5 gap-12 mb-16">
      <div className="md:col-span-2 bg-white/80 backdrop-blur-xl border border-[#8E9775]/10 rounded-3xl p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Macronutrient Breakdown
        </h3>
        
        <div className="relative w-48 h-48 mx-auto mb-6">
          <div 
            className="w-full h-full rounded-full flex items-center justify-center relative"
            style={{
              background: `conic-gradient(from 0deg, #8E9775 0deg 180deg, #B2B09B 180deg 270deg, #d1d5db 270deg 360deg)`
            }}
          >
            <div className="absolute w-32 h-32 bg-[#F6F5F3] rounded-full flex flex-col items-center justify-center">
              <div className="text-2xl font-extrabold text-gray-800">222</div>
              <div className="text-sm text-gray-500">calories</div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8E9775]"></div>
            <span>Carbs 58%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#B2B09B]"></div>
            <span>Protein 15%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <span>Fat 27%</span>
          </div>
        </div>
      </div>
      
      <div className="md:col-span-3 bg-white/80 backdrop-blur-xl border border-[#8E9775]/10 rounded-3xl p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Detailed Nutrition Facts
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nutritionFacts.map((fact, index) => (
            <div 
              key={index}
              className="flex justify-between items-center p-4 bg-[#8E9775]/5 rounded-xl hover:bg-[#8E9775]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-semibold text-gray-800">{fact.name}</span>
              <span className="font-bold text-[#8E9775]">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionOverview;
