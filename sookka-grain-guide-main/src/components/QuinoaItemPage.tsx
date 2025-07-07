
import { useState } from 'react';
import { Search, ExternalLink, Heart } from 'lucide-react';
import Navbar from './Navbar';
import ItemHero from './ItemHero';
import ContentNavigation from './ContentNavigation';
import NutritionOverview from './NutritionOverview';
import BenefitsSection from './BenefitsSection';
import RecipesSection from './RecipesSection';
import FloatingActionButton from './FloatingActionButton';
import Footer from './Footer';

const QuinoaItemPage = () => {
  const [activeSection, setActiveSection] = useState('nutrition');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F5F3] via-[#FEFEFE] to-[#F6F5F3] text-gray-800 leading-relaxed overflow-x-hidden">
      <Navbar />
      <ItemHero />
      
      <div className="max-w-6xl mx-auto px-8">
        <ContentNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {activeSection === 'nutrition' && <NutritionOverview />}
        {activeSection === 'benefits' && <BenefitsSection />}
        {activeSection === 'recipes' && <RecipesSection />}
        {activeSection === 'storage' && (
          <div className="py-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-[#8E9775] bg-clip-text text-transparent text-center mb-8">
              Storage Tips
            </h2>
            <div className="bg-white/80 backdrop-blur-md border border-[#8E9775]/10 rounded-3xl p-8">
              <p className="text-gray-600 text-lg">Store quinoa in an airtight container in a cool, dry place. Properly stored, it can last up to 3 years. Cooked quinoa should be refrigerated and consumed within 5-7 days.</p>
            </div>
          </div>
        )}
        {activeSection === 'history' && (
          <div className="py-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-[#8E9775] bg-clip-text text-transparent text-center mb-8">
              History
            </h2>
            <div className="bg-white/80 backdrop-blur-md border border-[#8E9775]/10 rounded-3xl p-8">
              <p className="text-gray-600 text-lg">Quinoa has been cultivated in the Andean region for over 5,000 years. The Incas called it "chisaya mama" or "mother of all grains" and considered it sacred. Today, it's recognized worldwide as a superfood.</p>
            </div>
          </div>
        )}
      </div>
      
      <FloatingActionButton />
      <Footer />
    </div>
  );
};

export default QuinoaItemPage;
