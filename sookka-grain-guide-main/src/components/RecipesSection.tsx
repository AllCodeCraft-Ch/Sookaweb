
const RecipesSection = () => {
  const recipes = [
    {
      emoji: '🥗',
      title: 'Mediterranean Quinoa Bowl',
      description: 'Fresh vegetables, feta cheese, and herbs with quinoa base',
      time: '25 min',
      difficulty: 'Easy'
    },
    {
      emoji: '🍲',
      title: 'Quinoa Vegetable Stir-fry',
      description: 'Colorful vegetables tossed with fluffy quinoa and asian flavors',
      time: '20 min',
      difficulty: 'Easy'
    },
    {
      emoji: '🥙',
      title: 'Quinoa Stuffed Bell Peppers',
      description: 'Bell peppers stuffed with quinoa, vegetables, and herbs',
      time: '45 min',
      difficulty: 'Medium'
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-gray-800 to-[#8E9775] bg-clip-text text-transparent text-center mb-8">
        Popular Quinoa Recipes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div 
            key={index}
            className="bg-white/80 backdrop-blur-xl border border-[#8E9775]/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8E9775]/20 transition-all duration-500"
          >
            <div className="h-44 bg-gradient-to-br from-[#8E9775] to-[#B2B09B] flex items-center justify-center text-5xl relative overflow-hidden">
              {recipe.emoji}
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {recipe.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {recipe.description}
              </p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#8E9775] font-semibold">
                  ⏱ {recipe.time}
                </span>
                <span className="bg-[#8E9775]/10 text-[#8E9775] px-3 py-1 rounded-xl font-semibold">
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesSection;
