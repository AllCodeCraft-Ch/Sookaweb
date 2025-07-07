
const BenefitsSection = () => {
  const benefits = [
    {
      icon: '💪',
      title: 'Complete Protein',
      description: 'Contains all nine essential amino acids, making it a perfect protein source for vegetarians and vegans.'
    },
    {
      icon: '❤️',
      title: 'Heart Health',
      description: 'Rich in magnesium and fiber, supporting cardiovascular health and helping to lower cholesterol levels.'
    },
    {
      icon: '🧠',
      title: 'Brain Function',
      description: 'High in iron and B-vitamins, essential for cognitive function and mental clarity.'
    },
    {
      icon: '⚡',
      title: 'Sustained Energy',
      description: 'Complex carbohydrates provide steady energy release without blood sugar spikes.'
    },
    {
      icon: '🛡️',
      title: 'Antioxidant Rich',
      description: 'Contains quercetin and kaempferol, powerful antioxidants that fight inflammation.'
    },
    {
      icon: '🌱',
      title: 'Gluten-Free',
      description: 'Naturally gluten-free, making it perfect for those with celiac disease or gluten sensitivity.'
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-gray-800 to-[#8E9775] bg-clip-text text-transparent text-center mb-8">
        Health Benefits
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-white/80 backdrop-blur-xl border border-[#8E9775]/10 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8E9775]/20 transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8E9775] to-[#B2B09B]"></div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-[#8E9775] to-[#B2B09B] rounded-2xl flex items-center justify-center text-2xl mb-4">
              {benefit.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {benefit.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
